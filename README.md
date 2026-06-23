# Chai Seed Resorts — Website

Plain HTML/CSS/JS site, ready for GitHub Pages (free hosting, no Squarespace renewal needed).

## Pages
- index.html — Home
- rooms.html — Rooms & Rates
- gallery.html — Gallery
- visit.html — Visit (address, hours, map)
- contact.html — Contact form (opens the visitor's email app, pre-filled, addressed to chaiseedresort@gmail.com)

## Deploy on GitHub Pages (free)
1. Create a new GitHub repository (e.g. `chai-seed-resorts`).
2. Upload all files in this folder to the repo (keep the `images/` folder structure as-is).
3. In the repo: Settings → Pages → Source → select the `main` branch, root folder. Save.
4. GitHub gives you a URL like `https://yourusername.github.io/chai-seed-resorts/`.
5. To use your own domain (chaiseedresorts.com), add a `CNAME` file with your domain name, and point your domain's DNS to GitHub Pages (GitHub's docs: "Managing a custom domain for your GitHub Pages site").

## Things to update later
- Social links (Instagram/Facebook/Twitter) currently point to "#" placeholders — add real profile URLs in every HTML file (search for `aria-label="Instagram"` etc.)
- The contact form opens the visitor's email client (mailto) since there's no backend. If you want it to submit silently without opening email, you'd need a form service like Formspree (free tier) — happy to wire that up if you want it.
