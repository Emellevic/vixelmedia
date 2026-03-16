# Vixel Media Portfolio - GitHub Pages Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying the Vixel Media portfolio website to GitHub Pages. The website is a static React application built with Vite and can be deployed directly to GitHub Pages without any backend infrastructure.

## Prerequisites

Before deploying, ensure you have:

- A GitHub account (free or paid)
- Git installed on your local machine
- The Vixel Media portfolio project files
- Node.js and pnpm installed (for local development)

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Name your repository `vixel-media-portfolio` (or any name you prefer)
4. Choose **Public** to make the site accessible
5. Do NOT initialize with README, .gitignore, or license (we'll add these)
6. Click **Create repository**

## Step 2: Prepare Your Local Repository

Open your terminal and navigate to the project directory:

```bash
cd /path/to/vixel-media-portfolio
```

Initialize Git and connect to your GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit: Vixel Media portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vixel-media-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**, select **GitHub Actions** as the source
5. GitHub will automatically detect that this is a Node.js project

## Step 4: Create GitHub Actions Workflow

GitHub Actions will automatically build and deploy your site. Create a workflow file:

1. In your repository, create `.github/workflows/deploy.yml`
2. Add the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'pnpm'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build project
        run: pnpm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: vixelmedia.com
```

**Note:** If you don't have a custom domain, remove the `cname:` line.

## Step 5: Push to GitHub

Commit and push the workflow file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

GitHub Actions will automatically build and deploy your site. You can monitor the progress in the **Actions** tab of your repository.

## Step 6: Access Your Live Site

Once the deployment completes successfully, your site will be available at:

- **Without custom domain:** `https://YOUR_USERNAME.github.io/vixel-media-portfolio`
- **With custom domain:** `https://vixelmedia.com` (if configured)

You can find the live URL in the **Settings > Pages** section of your repository.

## Continuous Deployment

After the initial setup, any time you push changes to the `main` branch, GitHub Actions will automatically:

1. Build the project
2. Run tests
3. Deploy to GitHub Pages

This means you can update your portfolio by simply pushing changes to Git.

## Adding a Custom Domain

To use a custom domain (e.g., `vixelmedia.com`):

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to your repository **Settings > Pages**
3. Under **Custom domain**, enter your domain name
4. Update your domain's DNS settings to point to GitHub Pages:
   - Add an `A` record pointing to `185.199.108.153`
   - Add an `A` record pointing to `185.199.109.153`
   - Add an `A` record pointing to `185.199.110.153`
   - Add an `A` record pointing to `185.199.111.153`
   - Or add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
5. Wait for DNS propagation (typically 24-48 hours)

## Updating Your Portfolio

To add new projects or make changes:

1. Update the project files locally
2. Test changes with `pnpm run dev`
3. Commit and push to GitHub:

```bash
git add .
git commit -m "Update portfolio with new project"
git push
```

The site will automatically rebuild and deploy.

## Adding New Projects

To add a new project to your portfolio:

1. **Update Home.tsx:** Add the project to the `featuredProjects` array
2. **Update Portfolio.tsx:** Add the project to the `projects` array
3. **Create Case Study:** Duplicate `CaseStudy.tsx` logic or update the template
4. **Update Images:** Replace placeholder images with your actual project images using the CDN URLs
5. **Commit and push** to trigger automatic deployment

## Troubleshooting

### Build Fails

If the GitHub Actions build fails:

1. Check the **Actions** tab for error messages
2. Verify all dependencies are listed in `package.json`
3. Ensure all imports are correct
4. Run `pnpm install` and `pnpm run build` locally to test

### Site Not Updating

If your changes don't appear:

1. Check that the GitHub Actions workflow completed successfully
2. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Wait a few minutes for DNS caching to clear
4. Check the **Settings > Pages** section for the correct URL

### Custom Domain Not Working

If your custom domain isn't working:

1. Verify DNS records are configured correctly
2. Wait for DNS propagation (can take up to 48 hours)
3. Check that the domain is entered correctly in **Settings > Pages**
4. Ensure SSL certificate is provisioned (GitHub does this automatically)

## Performance Optimization

To ensure optimal performance:

1. **Compress images:** Use tools like TinyPNG or ImageOptim
2. **Lazy load images:** Already implemented in the project
3. **Minimize CSS/JS:** Vite handles this automatically during build
4. **Use CDN URLs:** All images use the CDN for faster delivery
5. **Enable caching:** GitHub Pages automatically caches assets

## Security

Your GitHub Pages site is automatically secured with:

- **HTTPS:** All traffic is encrypted
- **DDoS protection:** GitHub provides built-in protection
- **Regular updates:** GitHub keeps infrastructure updated
- **No server access:** No backend to compromise

## Maintenance

Regular maintenance tasks:

1. **Update dependencies:** Run `pnpm update` monthly
2. **Check for security vulnerabilities:** Run `pnpm audit`
3. **Review analytics:** Monitor visitor statistics
4. **Update content:** Keep portfolio projects current
5. **Test responsiveness:** Check on various devices

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## Support

For issues or questions:

1. Check the [GitHub Pages troubleshooting guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-common-issues-with-github-pages)
2. Review GitHub Actions logs in the **Actions** tab
3. Consult the project README for development instructions
4. Contact GitHub Support for account-related issues

---

**Last Updated:** March 2024
**Version:** 1.0
