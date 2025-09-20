# Vercel Deployment Guide for Cipher Pay Flow

This guide provides step-by-step instructions for deploying Cipher Pay Flow to Vercel.

## Prerequisites

- GitHub account
- Vercel account
- Node.js 18+ installed locally (for testing)

## Step 1: Prepare the Repository

1. Ensure all code is committed and pushed to GitHub
2. Verify the repository is accessible at: https://github.com/mrcrypto223/cipher-pay-flow

## Step 2: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub repository: `mrcrypto223/cipher-pay-flow`
4. Click "Import"

## Step 3: Configure Build Settings

### Framework Preset
- Select "Vite" as the framework preset

### Build Command
```bash
npm run build
```

### Output Directory
```
dist
```

### Install Command
```bash
npm install
```

## Step 4: Environment Variables

Add the following environment variables in Vercel dashboard:

### Required Variables
```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
```

### How to Add Environment Variables:
1. In Vercel dashboard, go to your project
2. Click on "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add each variable with its value
5. Make sure to select "Production", "Preview", and "Development" for each variable

## Step 5: Deploy

1. Click "Deploy" button
2. Wait for the build to complete
3. Your application will be available at the provided Vercel URL

## Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click on "Settings" tab
3. Click on "Domains" in the left sidebar
4. Add your custom domain
5. Follow the DNS configuration instructions

## Step 7: Verify Deployment

1. Visit your deployed URL
2. Test wallet connection
3. Verify all features are working
4. Check that environment variables are properly loaded

## Troubleshooting

### Build Failures
- Check that all dependencies are in package.json
- Verify build command is correct
- Check for TypeScript errors

### Environment Variables Not Loading
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Verify variables are set for all environments (Production, Preview, Development)

### Wallet Connection Issues
- Verify WalletConnect Project ID is correct
- Check RPC URL is accessible
- Ensure chain ID matches Sepolia testnet

## Manual Deployment Commands

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test locally
npm run preview

# Deploy to Vercel CLI (if installed)
npx vercel --prod
```

## Post-Deployment Checklist

- [ ] Application loads without errors
- [ ] Wallet connection works
- [ ] All pages are accessible
- [ ] Environment variables are loaded
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active
- [ ] Performance is acceptable

## Support

For deployment issues:
1. Check Vercel build logs
2. Verify environment variables
3. Test locally with `npm run build && npm run preview`
4. Contact support if issues persist

## Security Notes

- Never commit sensitive environment variables to Git
- Use Vercel's environment variable system for secrets
- Regularly rotate API keys and tokens
- Monitor deployment logs for security issues
