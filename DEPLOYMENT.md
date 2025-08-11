# Deployment Guide for Portfolio Website

This guide will help you deploy your React portfolio website to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-frontend.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain

### Option 2: Netlify (Free & Easy)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop your `build` folder
   - Or connect your GitHub repository for auto-deploy

3. **Custom Domain**
   - In Netlify dashboard, go to "Domain management"
   - Add your custom domain

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-frontend",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Environment Configuration

### API URL Configuration

Your React app is currently configured to connect to:
```
https://assignment1-joanna.onrender.com/
```

If you need to change this:

1. **For different environments**, create a `.env` file:
   ```bash
   # .env
   REACT_APP_API_URL=https://your-api-url.com
   ```

2. **Update components** to use environment variable:
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || 'https://assignment1-joanna.onrender.com';
   ```

3. **Update these files**:
   - `src/components/Books.js` (line 18)
   - `src/components/Authors.js` (line 18)

## 📱 Testing Before Deployment

1. **Local Testing**
   ```bash
   npm start
   # Test all routes and API connections
   ```

2. **Build Testing**
   ```bash
   npm run build
   npm install -g serve
   serve -s build
   # Test production build locally
   ```

3. **API Connection Test**
   - Ensure your backend API is running
   - Test `/api/books` and `/api/authors` endpoints
   - Verify CORS is enabled on your backend

## 🌐 Domain & SSL

### Custom Domain Setup

1. **Purchase domain** (Namecheap, GoDaddy, etc.)
2. **Configure DNS**:
   - Add CNAME record pointing to your deployment platform
   - For Vercel: `cname.vercel-dns.com`
   - For Netlify: `your-site.netlify.app`

3. **SSL Certificate**:
   - Vercel & Netlify provide free SSL automatically
   - GitHub Pages provides SSL for custom domains

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Replace emoji placeholders with actual images
   - Use WebP format when possible
   - Compress images appropriately

2. **Bundle Analysis**
   ```bash
   npm install --save-dev source-map-explorer
   npm run build
   npx source-map-explorer 'build/static/js/*.js'
   ```

3. **Lighthouse Audit**
   - Use Chrome DevTools Lighthouse
   - Aim for 90+ scores in all categories

## 🔍 Post-Deployment Checklist

- [ ] All routes work correctly
- [ ] API connections are successful
- [ ] Contact form functions properly
- [ ] Mobile responsiveness is good
- [ ] Loading states work correctly
- [ ] Error handling is graceful
- [ ] Performance is acceptable
- [ ] SEO meta tags are set
- [ ] Analytics are configured (if desired)

## 🚨 Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Check if your backend is running
   - Verify CORS settings
   - Check network tab for errors

2. **Build Errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check for syntax errors in components
   - Verify all imports are correct

3. **Routing Issues**
   - Ensure React Router is properly configured
   - Check for 404 errors on refresh
   - Verify basename in Router component

4. **Styling Issues**
   - Check CSS imports in components
   - Verify CSS class names match
   - Test on different browsers

## 📈 Analytics & Monitoring

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to `public/index.html`
3. Track page views and user interactions

### Performance Monitoring
- Use Vercel Analytics (if using Vercel)
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket)

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

If you encounter issues during deployment:
1. Check the platform's documentation
2. Review build logs for errors
3. Test locally first
4. Check browser console for errors

---

**Happy Deploying! 🚀**
