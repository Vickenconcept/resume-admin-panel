# Fixing 404 Error on Vercel

## Common Causes of 404 on Vercel

### 1. Wrong Root Directory

**Problem**: If your repo has multiple folders, Vercel might not know where the Next.js app is.

**Solution**: In Vercel Dashboard → Your Project → Settings → General:
- Set **Root Directory** to: `admin-dashboard`
- Click **Save**

### 2. Build Output Issue

**Problem**: Build might be failing silently.

**Solution**: 
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the failed deployment
3. Check the **Build Logs** tab
4. Look for errors and fix them

### 3. Missing Environment Variables

**Problem**: Build might succeed but runtime fails.

**Solution**: 
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_API_URL=https://onpagecv.on-forge.com`
3. Redeploy

### 4. Next.js Configuration

**Problem**: Next.js might need specific configuration for Vercel.

**Solution**: The `vercel.json` file has been created. Make sure it's in your repo.

## Step-by-Step Fix

### Step 1: Verify Root Directory

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **General**
4. Check **Root Directory**:
   - If your repo is just `admin-dashboard`, leave it empty or set to `./`
   - If your repo contains multiple folders, set to `admin-dashboard`
5. Click **Save**

### Step 2: Check Build Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check **Build Logs**:
   - Look for errors
   - Check if build completed successfully
   - Look for "Build Completed" message

### Step 3: Verify Files Are Pushed

Make sure these files are in your Git repository:
- `vercel.json` (just created)
- `package.json`
- `next.config.ts`
- `app/` directory
- All source files

### Step 4: Force Redeploy

1. Go to **Deployments**
2. Click the three dots (⋯) on latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger deployment

### Step 5: Check Function Logs

If build succeeds but you still get 404:
1. Go to **Deployments** → Latest deployment
2. Click **View Function Logs**
3. Check for runtime errors

## Quick Checklist

- [ ] Root Directory is set correctly in Vercel
- [ ] `vercel.json` is in the repository
- [ ] Build completes successfully (check logs)
- [ ] Environment variables are set
- [ ] All files are pushed to Git
- [ ] Redeployed after changes

## Common Vercel Settings

**Framework Preset**: Next.js
**Root Directory**: `admin-dashboard` (or `./` if repo is just admin-dashboard)
**Build Command**: `npm run build`
**Output Directory**: `.next`
**Install Command**: `npm install`

## Still Getting 404?

1. **Check the URL**: Make sure you're accessing the correct Vercel URL
2. **Check Deployment Status**: Should be "Ready" not "Error"
3. **Check Domain**: If using custom domain, verify DNS settings
4. **Check Routes**: Try accessing `/admin/login` instead of just `/`

## Test URLs

After deployment, test these:
- `https://your-app.vercel.app/` - Home page
- `https://your-app.vercel.app/admin/login` - Login page
- `https://your-app.vercel.app/payment/success?reference=test` - Payment success
