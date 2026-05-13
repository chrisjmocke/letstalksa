# Limpopo Voice Website (Independent Repo)

This repository is intentionally separate from your app project to avoid deployment and code overlap.

## 1) Directory Separation

Current website directory:

- `c:\Users\BOK\web.limpopovoice.co.za`

Keep your app and website in separate folders and separate repositories.

## 2) Subdomain / Hosting Strategy

Recommended:

- App: `https://limpopovoice.co.za/`
- Website: `https://web.limpopovoice.co.za/`

This repository is configured for **GitHub Pages** with custom domain support.

## 3) Version Control (Separate Git Repo)

Already initialized as its own Git repository.

Use these commands to connect and push:

```powershell
git remote add origin https://github.com/<your-username>/web.limpopovoice.co.za.git
git add .
git commit -m "Initial website scaffold"
git push -u origin main
```

## 4) Hosting Setup (GitHub Pages)

Repository includes [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for automatic deployment.

In GitHub repository settings:

1. Go to **Settings -> Pages**.
2. Set **Source** to **GitHub Actions**.
3. Confirm custom domain is `web.limpopovoice.co.za`.

The `CNAME` file is already included.

## 5) DNS Configuration

### For subdomain (recommended website URL)

Create a DNS `CNAME` record:

- Host: `web`
- Type: `CNAME`
- Value: `<your-github-username>.github.io`

### Optional: apex root on GitHub Pages

If you host `limpopovoice.co.za` itself on GitHub Pages, use A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Keep your app hosting strategy in mind before changing apex records.

## 6) Website Development

This project is a static website stack:

- [`index.html`](index.html)
- [`styles.css`](styles.css)
- [`script.js`](script.js)

## 7) Testing

### Local test

Use VS Code Live Server extension, or any static server.

PowerShell example (Node):

```powershell
npx serve .
```

Then open `http://localhost:3000` and verify:

- Responsive layout (mobile + desktop)
- Navigation links and CTA buttons
- Animation/reveal behavior

### Staging-style checks before production

- Confirm GitHub Actions deploy succeeds
- Verify `https://web.limpopovoice.co.za` resolves
- Check SSL certificate is issued
- Run a hard refresh and test from phone + desktop

## 8) Deployment

Deployment is automatic on push to `main`.

```powershell
git add .
git commit -m "Update website"
git push
```

## 9) Monitor and Maintain

- Review GitHub Actions run status after each push
- Monitor DNS expiry and SSL status
- Keep content and dependencies updated
- Add uptime checks (for example UptimeRobot) for `web.limpopovoice.co.za`
