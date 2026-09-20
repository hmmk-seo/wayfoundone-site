# Wayfound website (wayfoundone.com)

Static site served by GitHub Pages (branch `main`, root). No build step.

- `index.html`, `local-seo.html`, `organic-seo.html`, `ai-visibility.html`, `about.html`, `book.html`: pages. GitHub Pages serves them at `/`, `/local-seo`, `/about` and so on.
- `style.css`, `site.js`: styles and behaviour. Fonts: `*.woff2` (licenses in `LICENSE-*.txt`).
- `site-config.js`: set your Calendly link and business email here.
- `sitemap.xml`, `robots.txt`, `404.html`, `favicon.svg`.

Custom domain: set in Settings > Pages (creates the CNAME file). DNS for the apex domain: A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 and a `www` CNAME to your GitHub username's `.github.io`.
