'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

const getApiUrl = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    if (typeof window !== 'undefined' && !window.location.hostname.includes('localhost')) {
      return 'https://onpagecv.on-forge.com';
    }
    return 'http://localhost:3000';
  }
  return apiUrl;
};

const API_BASE = getApiUrl() + '/api';

interface Template {
  id: string;
  name: string;
  subject: string;
  body: string;
}

interface Recipient {
  id: number;
  name: string;
  email: string;
}

export default function ComposeEmailPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [loadingTemplates, setLoadingTemplates] = useState(true);
  const [loadingRecipients, setLoadingRecipients] = useState(false);
  const [recipientMode, setRecipientMode] = useState<'all' | 'filter' | 'select'>('all');
  const [filter, setFilter] = useState<string>('all');
  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  const [subject, setSubject] = useState('');
  const [html, setHtml] = useState('');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ sent: number; failed: number; total: number; failedDetails?: { userId: number; error: string }[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const authHeaders = (): HeadersInit => {
    const t = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
    return t ? { Authorization: `Bearer ${t}` } : {};
  };

  useEffect(() => {
    const adminUser = typeof window !== 'undefined' ? localStorage.getItem('adminUser') : null;
    if (!adminUser) {
      router.push('/admin/login');
      return;
    }
    loadTemplates();
  }, [router]);

  useEffect(() => {
    if (recipientMode === 'all' || recipientMode === 'filter') {
      loadRecipients(recipientMode === 'all' ? 'all' : filter);
    } else {
      loadRecipients('all'); // for "select users" we load all and let them pick
    }
  }, [recipientMode, filter]);

  const loadTemplates = async () => {
    setLoadingTemplates(true);
    try {
      const res = await fetch(`${API_BASE}/admin/email/templates`, {
        credentials: 'include',
        headers: authHeaders(),
      });
      if (res.status === 401 || res.status === 403) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.success && data.data.templates) setTemplates(data.data.templates);
    } catch (e) {
      setError('Failed to load templates');
    } finally {
      setLoadingTemplates(false);
    }
  };

  const loadRecipients = async (filterValue: string) => {
    setLoadingRecipients(true);
    try {
      const res = await fetch(`${API_BASE}/admin/email/recipients?filter=${encodeURIComponent(filterValue)}`, {
        credentials: 'include',
        headers: authHeaders(),
      });
      if (res.status === 401 || res.status === 403) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.success && data.data.users) setRecipients(data.data.users);
    } catch (e) {
      setRecipients([]);
    } finally {
      setLoadingRecipients(false);
    }
  };

  const applyTemplate = (template: Template) => {
    setSubject(template.subject);
    setHtml(template.body);
    setSelectedTemplateId(template.id);
  };

  const getRecipientCount = () => {
    if (recipientMode === 'all') return recipients.length;
    if (recipientMode === 'filter') return recipients.length;
    return selectedUserIds.length;
  };

  const handleSend = async () => {
    if (!subject.trim() || !html.trim()) {
      setError('Subject and body are required');
      return;
    }
    const count = recipientMode === 'select' ? selectedUserIds.length : recipients.length;
    if (count === 0) {
      setError('No recipients selected');
      return;
    }
    setError(null);
    setResult(null);
    setSending(true);
    try {
      const body: { subject: string; html: string; toAll?: boolean; userIds?: number[]; filter?: string } = {
        subject: subject.trim(),
        html: html.trim(),
      };
      if (recipientMode === 'all') body.toAll = true;
      else if (recipientMode === 'select') body.userIds = selectedUserIds;
      else body.filter = filter;

      const res = await fetch(`${API_BASE}/admin/email/send`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.status === 401 || res.status === 403) {
        router.push('/admin/login');
        return;
      }
      if (data.success && data.data) {
        setResult({
          sent: data.data.sent,
          failed: data.data.failed,
          total: data.data.total,
          failedDetails: data.data.failedDetails,
        });
      } else {
        setError(data.error || data.message || 'Failed to send');
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to send');
    } finally {
      setSending(false);
    }
  };

  const toggleUser = (id: number) => {
    setSelectedUserIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectAllUsers = () => {
    if (selectedUserIds.length === recipients.length) {
      setSelectedUserIds([]);
    } else {
      setSelectedUserIds(recipients.map((u) => u.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link href="/admin/dashboard" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Admin Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 max-w-4xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Compose Email</h1>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          {result && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
              Sent to {result.sent} of {result.total} recipients.
              {result.failed > 0 && (
                <span className="block mt-1 text-sm">
                  {result.failed} failed. {result.failedDetails?.map((f) => f.error).join('; ')}
                </span>
              )}
            </div>
          )}

          {/* Template */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Start from a template (optional)</label>
            {loadingTemplates ? (
              <p className="text-gray-500">Loading templates...</p>
            ) : (
              <select
                value={selectedTemplateId}
                onChange={(e) => {
                  const id = e.target.value;
                  setSelectedTemplateId(id);
                  const t = templates.find((x) => x.id === id);
                  if (t) applyTemplate(t);
                }}
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              >
                <option value="">— No template —</option>
                {templates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Recipients */}
          <div className="mb-6 bg-white rounded-lg shadow p-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Recipients</label>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="recipientMode"
                  checked={recipientMode === 'all'}
                  onChange={() => setRecipientMode('all')}
                />
                <span>All registered users</span>
                {recipientMode === 'all' && (
                  <span className="text-gray-500 text-sm">({recipients.length} users)</span>
                )}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="recipientMode"
                  checked={recipientMode === 'filter'}
                  onChange={() => setRecipientMode('filter')}
                />
                <span>Users by status:</span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  disabled={recipientMode !== 'filter'}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
                >
                  <option value="all">All users</option>
                  <option value="free_trial_used">Free trial used</option>
                  <option value="no_credits">No credits left</option>
                  <option value="has_paid">Has made a payment</option>
                </select>
                {recipientMode === 'filter' && (
                  <span className="text-gray-500 text-sm">({recipients.length} users)</span>
                )}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="recipientMode"
                  checked={recipientMode === 'select'}
                  onChange={() => setRecipientMode('select')}
                />
                <span>Select specific users</span>
                {recipientMode === 'select' && (
                  <span className="text-gray-500 text-sm">({selectedUserIds.length} selected)</span>
                )}
              </label>
            </div>

            {recipientMode === 'select' && (
              <div className="mt-4 border border-gray-200 rounded-lg max-h-48 overflow-y-auto">
                <div className="p-2 bg-gray-50 border-b border-gray-200 sticky top-0">
                  <button
                    type="button"
                    onClick={selectAllUsers}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    {selectedUserIds.length === recipients.length ? 'Deselect all' : 'Select all'}
                  </button>
                </div>
                <ul className="divide-y divide-gray-100">
                  {recipients.map((u) => (
                    <li key={u.id} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedUserIds.includes(u.id)}
                        onChange={() => toggleUser(u.id)}
                      />
                      <span className="text-sm font-medium text-gray-900">{u.name}</span>
                      <span className="text-sm text-gray-500">{u.email}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {loadingRecipients && <p className="mt-2 text-sm text-gray-500">Loading recipients...</p>}
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Body */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Body (HTML supported; use {'{{name}}'} for recipient name)</label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="Write your email content here. You can use HTML. Use {{name}} to insert the recipient's name."
              rows={14}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 font-mono text-sm"
            />
            <div className="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-xs font-medium text-gray-600 mb-1">Preview</p>
              <div
                className="text-sm text-gray-700 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: html || '<em>Empty</em>' }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleSend}
              disabled={sending || !subject.trim() || !html.trim() || getRecipientCount() === 0}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : `Send to ${getRecipientCount()} recipient(s)`}
            </button>
            {getRecipientCount() === 0 && recipientMode !== 'select' && (
              <span className="text-sm text-gray-500">Load recipients first</span>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
