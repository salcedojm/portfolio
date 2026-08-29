# Portfolio

A React + Vite portfolio site. Dark, terminal-inspired theme with an accent color of `#5665e8`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploy to AWS Amplify

**Option A — Amplify Console (Git-connected, recommended)**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In the AWS Amplify console, choose **New app → Host web app** and connect the repo/branch.
3. Amplify will auto-detect the included `amplify.yml` build spec (build command `npm run build`, output directory `dist`). Accept and deploy.
4. Every push to the connected branch redeploys automatically.

**Option B — Manual drag-and-drop**
1. Run `npm install && npm run build` locally.
2. In the Amplify console, choose **Deploy without Git provider**.
3. Drag the `dist/` folder into the upload area.

## Customize

- **Name / role / bio**: `src/components/Hero.jsx`, `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx` — edit the `CATEGORIES` array
- **Projects**: `src/components/Projects.jsx` — replace the `PLACEHOLDERS` array once you have real work to show
- **Contact links**: `src/components/Contact.jsx`
- **Colors / fonts**: `src/index.css` (`:root` variables)
# portfolio
