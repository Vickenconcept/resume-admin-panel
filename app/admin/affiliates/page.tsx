'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';

interface AffiliateRequest {
  id: number;
  name: string;
  email: string;
  wherePromote: string | null;
  createdAt: string;
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

export default function AffiliateRequestsPage() {
  const [requests, setRequests] = useState<AffiliateRequest[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRequests = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      });

      const adminToken = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
      const authHeaders: HeadersInit | undefined = adminToken
        ? { Authorization: `Bearer ${adminToken}` }
        : undefined;

      const res = await fetch(`${API_URL}/admin/affiliate-requests?${params.toString()}`, {
        credentials: 'include',
        headers: authHeaders,
      });

      if (res.status === 401 || res.status === 403) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('adminUser');
          localStorage.removeItem('adminToken');
          window.location.href = '/admin/login';
        }
        return;
      }

      const data = await res.json();
      if (!data?.success) {
        setError(data?.message || 'Failed to load affiliate requests');
        return;
      }

      setRequests(data.data.requests);
      setPagination(data.data.pagination);
    } catch (err) {
      console.error('Load affiliate requests error:', err);
      setError('Failed to load affiliate requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
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
              <div>
                <h1 className="text-xl font-bold text-gray-900">Affiliate Requests</h1>
                <p className="mt-1 text-sm text-gray-600">
                  People who submitted the JV form to promote OnPage CV.
                </p>
              </div>
              <div className="text-sm text-gray-500">
                Total: <span className="font-semibold text-gray-900">{pagination.total}</span>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Where they&apos;ll promote
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((r) => (
                    <tr key={r.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {r.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <a href={`mailto:${r.email}`} className="hover:underline">
                          {r.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 max-w-md">
                        {r.wherePromote || <span className="text-gray-400">Not specified</span>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(r.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {requests.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-6 text-center text-sm text-gray-500"
                      >
                        No affiliate requests yet.
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
                  onClick={() =>
                    setPagination((prev) => ({ ...prev, page: Math.max(1, prev.page - 1) }))
                  }
                  disabled={pagination.page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setPagination((prev) => ({
                      ...prev,
                      page: Math.min(prev.totalPages, prev.page + 1),
                    }))
                  }
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

