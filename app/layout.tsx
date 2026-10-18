export const metadata = {
  title: 'CrownKing App',
  description: 'Mobile-first PWA Bible study app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
