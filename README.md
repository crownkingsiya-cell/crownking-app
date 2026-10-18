# CrownKing App

Mobile-first PWA Bible study scaffold.

Included public translations (samples):
- KJV (King James Version)
- WEB (World English Bible)
- ASV (American Standard Version)

This scaffold includes:
- Next.js + TypeScript + Tailwind CSS
- next-pwa for PWA/service worker support
- Client-side search (FlexSearch) and offline storage (localForage)
- Importer UI scaffold (add USFM/OSIS/JSON uploads to the app)

Getting started

```bash
git clone https://github.com/crownkingsiya-cell/crownking-app.git
cd crownking-app
npm install
npm run dev
```

Open http://localhost:3000 and navigate to the reader.

Adding full translations

For full offline translations, add JSON/USFM/OSIS files via the importer (UI coming soon) or place them in a non-tracked storage and import at runtime. Full translations can be large — recommended to import at runtime rather than committing to git.
