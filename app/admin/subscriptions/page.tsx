'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';

interface Subscription {
  id: number;
  status: string;
  amount: string;
  credits: number;
  lastChargedAt?: string | null;
  nextChargeAt?: string | null;
  createdAt: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

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

const API_URL = `${getApiUrl()}/api`;

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  useEffect(() => {
    loadSubscriptions();
  }, [pagination.page, statusFilter]);

  const loadSubscriptions = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      });
      if (statusFilter) params.append('status', statusFilter);

      const adminToken = localStorage.getItem('adminToken');
      const authHeaders = adminToken ? { Authorization: `Bearer ${adminToken}` } : {};

      const response = await fetch(`${API_URL}/admin/subscriptions?${params}`, {
        credentials: 'include',
        headers: authHeaders,
      });

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminToken');
        window.location.href = '/admin/login';
        return;
      }

      const data = await response.json();
      if (data.success) {
        setSubscriptions(data.data.subscriptions);
        setPagination(data.data.pagination);
      } else {
        setError(data.message || 'Failed to load subscriptions');
      }
    } catch (err) {
      console.error('Load subscriptions error:', err);
      setError('Failed to load subscriptions');
    } finally {
      setLoading(false);
    }
  };

  const updateSubscriptionStatus = async (subscriptionId: number, status: string) => {
    try {
      const adminToken = localStorage.getItem('adminToken');
      const authHeaders = adminToken ? { Authorization: `Bearer ${adminToken}` } : {};
      setUpdatingId(subscriptionId);
      const response = await fetch(`${API_URL}/admin/subscriptions/${subscriptionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders,
        },
        credentials: 'include',
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      if (data.success) {
        await loadSubscriptions();
      } else {
        setError(data.message || 'Failed to update subscription');
      }
    } catch (err) {
      console.error('Update subscription error:', err);
      setError('Failed to update subscription');
    } finally {
      setUpdatingId(null);
    }
  };

  const cancelSubscription = async (subscriptionId: number) => {
    try {
      const adminToken = localStorage.getItem('adminToken');
      const authHeaders = adminToken ? { Authorization: `Bearer ${adminToken}` } : {};
      setUpdatingId(subscriptionId);
      const response = await fetch(`${API_URL}/admin/subscriptions/${subscriptionId}/cancel`, {
        method: 'POST',
        headers: {
          ...authHeaders,
        },
        credentials: 'include',
      });

      const data = await response.json();
      if (data.success) {
        await loadSubscriptions();
      } else {
        setError(data.message || 'Failed to cancel subscription');
      }
    } catch (err) {
      console.error('Cancel subscription error:', err);
      setError('Failed to cancel subscription');
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">Subscriptions</h2>
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-600">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPagination((prev) => ({ ...prev, page: 1 }));
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="past_due">Past Due</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="p-4 text-sm text-red-600 border-b border-gray-200">
                {error}
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Charge</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Charge</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subscriptions.map((subscription) => (
                    <tr key={subscription.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{subscription.user?.name || 'N/A'}</div>
                          <div className="text-sm text-gray-500">{subscription.user?.email || ''}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${Number(subscription.amount).toLocaleString()} / {subscription.credits} credits
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          subscription.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : subscription.status === 'canceled'
                              ? 'bg-red-100 text-red-800'
                              : subscription.status === 'paused'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {subscription.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {subscription.nextChargeAt ? new Date(subscription.nextChargeAt).toLocaleString() : '—'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {subscription.lastChargedAt ? new Date(subscription.lastChargedAt).toLocaleString() : '—'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center gap-2">
                          {subscription.status === 'active' ? (
                            <button
                              onClick={() => updateSubscriptionStatus(subscription.id, 'paused')}
                              disabled={updatingId === subscription.id}
                              className="px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50 disabled:opacity-50"
                            >
                              Pause
                            </button>
                          ) : (
                            <button
                              onClick={() => updateSubscriptionStatus(subscription.id, 'active')}
                              disabled={updatingId === subscription.id}
                              className="px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50 disabled:opacity-50"
                            >
                              Resume
                            </button>
                          )}
                          <button
                            onClick={() => cancelSubscription(subscription.id)}
                            disabled={updatingId === subscription.id}
                            className="px-3 py-1 border border-red-300 text-red-600 rounded text-xs hover:bg-red-50 disabled:opacity-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {subscriptions.length === 0 && (
                    <tr>
                      <td className="px-6 py-6 text-center text-sm text-gray-500" colSpan={6}>
                        No subscriptions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-700">
                Page {pagination.page} of {pagination.totalPages}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPagination((prev) => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPagination((prev) => ({ ...prev, page: Math.min(prev.totalPages, prev.page + 1) }))}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
