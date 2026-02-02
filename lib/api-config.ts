// Centralized API configuration
// This ensures consistent API URL usage across the app

export const getApiUrl = (): string => {
  // In Next.js, NEXT_PUBLIC_* variables are embedded at build time
  // Make sure to set this in Vercel environment variables
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl) {
    // Fallback for development
    if (typeof window !== 'undefined') {
      // Client-side: use current origin or fallback
      return window.location.origin.includes('localhost') 
        ? 'http://localhost:3000' 
        : 'https://onpagecv.on-forge.com';
    }
    // Server-side fallback
    return 'https://onpagecv.on-forge.com';
  }
  
  return apiUrl;
};

export const API_BASE_URL = getApiUrl();
