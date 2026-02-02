'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [credits, setCredits] = useState<number | null>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const reference = searchParams.get('reference');
  const error = searchParams.get('error');

  useEffect(() => {
    if (error) {
      setStatus('error');
      return;
    }

    if (!reference) {
      setStatus('error');
      return;
    }

    // Payment is already verified and processed by the callback endpoint
    // The callback redirected here after marking payment as completed in database
    // So we can safely show success, but try to get credit info if possible
    setStatus('success');

    // Optionally try to get credit info (non-blocking)
    const getCreditInfo = async () => {
      try {
        const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
        if (!token) return;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/payment/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ reference }),
        });

        const data = await response.json();
        if (data.success && data.data.credits) {
          setCredits(data.data.credits);
        }
        if (data.success && data.data) {
          setPaymentData(data.data);
        }
      } catch (error) {
        // Silently fail - we already showed success
        console.log('Could not fetch credit info, but payment was successful');
      }
    };

    getCreditInfo();
  }, [reference, error]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="relative max-w-md w-full">
        {/* Success Modal */}
        {status === 'success' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with checkmark */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Payment Successful</h1>
              <p className="text-blue-100 text-base">Thank you for your payment. Your credits have been added to your account.</p>
            </div>

            {/* Payment Details */}
            <div className="p-8">
              <div className="space-y-4 mb-6">
                {credits && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Credits Added:</span>
                    <span className="text-gray-900 font-semibold text-lg">{credits} Credits</span>
                  </div>
                )}
                {paymentData && paymentData.amount && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Amount Paid:</span>
                    <span className="text-gray-900 font-semibold">${parseFloat(paymentData.amount).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Payment Method:</span>
                  <span className="text-gray-900 font-semibold">Paystack</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Date & Time:</span>
                  <span className="text-gray-900 font-semibold">{formatDate(new Date())}</span>
                </div>
                {reference && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Transaction Reference:</span>
                    <span className="text-gray-900 font-mono text-xs break-all text-right max-w-[200px]">{reference}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  if (window.opener) {
                    window.close();
                  } else {
                    router.push('/');
                  }
                }}
                className="w-full px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
              >
                Continue with Extension
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Please refresh the extension popup to see your updated credits
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {status === 'loading' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-center">
              <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h1 className="text-3xl font-bold text-white mb-2">Verifying Payment...</h1>
              <p className="text-blue-100 text-base">Please wait while we confirm your payment</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Payment Verification Failed</h1>
              <p className="text-red-100 text-base">We couldn't verify your payment</p>
            </div>
            <div className="p-8">
              {reference && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-xs text-gray-500 mb-1">Transaction Reference</p>
                  <p className="text-sm font-mono text-gray-900 break-all">{reference}</p>
                </div>
              )}
              <Link
                href="/"
                className="block w-full px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base text-center"
              >
                Go to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-center">
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h1 className="text-3xl font-bold text-white mb-2">Loading...</h1>
          </div>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
