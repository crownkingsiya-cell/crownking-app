import Link from 'next/link'
import translations from '../data/translations/index.json'

export default function HomePage() {
  return (
    <main className="min-h-screen p-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">CrownKing App</h1>
          <p className="text-sm text-slate-600">Mobile PWA Bible study — offline-first</p>
        </div>
        <Link href="/reader">
          <a className="rounded bg-blue-600 px-4 py-2 text-white">Open Reader</a>
        </Link>
      </header>

      <section className="space-y-4">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Included public translations</h2>
          <ul className="mt-2 list-disc pl-6 text-sm text-slate-700">
            {translations.map((t: any) => (
              <li key={t.code}>{t.name} ({t.code})</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Features</h2>
          <ul className="mt-2 list-disc pl-6 text-sm text-slate-700">
            <li>Verse reader (book → chapter → verse)</li>
            <li>Offline caching and PWA install</li>
            <li>Bookmarks and notes (IndexedDB)</li>
            <li>Client-side search (FlexSearch)</li>
            <li>Importer for USFM/OSIS/JSON uploads</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Next steps</h2>
          <ol className="mt-2 list-decimal pl-6 text-sm text-slate-700">
            <li>npm install</li>
            <li>npm run dev</li>
            <li>Open on mobile and install as PWA</li>
          </ol>
        </div>
      </section>
    </main>
  )
}
