# Fixing Environment Variables on Vercel

## Problem
The app is still using `http://localhost:3000` instead of the production API URL even after setting `NEXT_PUBLIC_API_URL` in Vercel.

## Why This Happens

1. **Build-time embedding**: Next.js embeds `NEXT_PUBLIC_*` variables at **build time**, not runtime
2. **Cached builds**: If the variable wasn't set when the build ran, it won't be available
3. **Hardcoded fallbacks**: Some files might have hardcoded localhost URLs

## Solution

### Step 1: Set Environment Variable in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://onpagecv.on-forge.com`
   - **Environment**: Production, Preview, Development (select all)
3. Click **Save**

### Step 2: Force a New Build

**Important**: Environment variables are embedded at build time, so you MUST rebuild after adding them.

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click the three dots (⋯) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new build

### Step 3: Verify the Variable is Set

After redeploying, check the build logs:
1. Go to Deployments → Latest deployment
2. Click **Build Logs**
3. Look for: `- Environments: .env` or environment variable loading messages

### Step 4: Test in Browser

1. Open your Vercel app
2. Open browser DevTools (F12)
3. Go to Console tab
4. Type: `process.env.NEXT_PUBLIC_API_URL`
5. It should show: `"https://onpagecv.on-forge.com"`

If it shows `undefined`, the variable wasn't set during build.

## Alternative: Runtime Configuration

If you need to change the API URL without rebuilding, you can use a runtime config file, but this requires code changes.

## Quick Checklist

- [ ] `NEXT_PUBLIC_API_URL` is set in Vercel (all environments)
- [ ] Variable value is: `https://onpagecv.on-forge.com` (no trailing slash)
- [ ] Redeployed after setting the variable
- [ ] Build logs show environment variables loaded
- [ ] Browser console shows correct API URL

## Common Mistakes

1. **Wrong variable name**: Must be `NEXT_PUBLIC_API_URL` (exact case)
2. **Not redeploying**: Variables are embedded at build time
3. **Wrong environment**: Make sure to set for Production, Preview, and Development
4. **Trailing slash**: Don't include trailing slash in the URL
5. **HTTP vs HTTPS**: Use `https://` for production

## Verify It's Working

After redeploying, check the Network tab in browser DevTools:
- API calls should go to: `https://onpagecv.on-forge.com/api/...`
- NOT: `http://localhost:3000/api/...`
