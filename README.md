# Ann Steffie Madigo — AI Portfolio

Personal portfolio site: AI strategy, GenAI, machine learning and MLOps work.
Built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion** and `react-simple-typewriter`,
restyled from my earlier `nextjs-legal-service-portfolio` project.

## Edit content
Everything (profile, stats, experience, projects, skills) is in **`lib/data.ts`**.
- Photo: add `public/ann.jpg` and set `photo: '/ann.jpg'` in `lib/data.ts`.
- CV: replace `public/Ann_Madigo_CV.pdf`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Deploy (GitHub Pages)
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
- Repo named `portfolio` → https://steffie254.github.io/portfolio/
- Repo named `Steffie254.github.io` → https://steffie254.github.io/ (base path is set automatically)

Vercel also works: import the repo at vercel.com/new.

The contact form needs no backend: it opens the visitor's email app with the message filled in.
