// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Body Revival",
  description: "Sito ufficiale di Body Revival, approfondimenti sul corpo umano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-gray-50 text-gray-800 font-sans min-h-screen">
        {/* Header responsive */}
        <header className="absolute top-0 left-0 w-full z-20">
          <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <h1 className="font-bold text-xl">Body Revival</h1>
            <ul className="flex flex-wrap space-x-4 mt-2 sm:mt-0">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/servizi" className="hover:underline">Servizi</a></li>
              <li><a href="/corpo-umano-in-movimento" className="hover:underline">Corpo umano in movimento</a></li>
              <li><a href="/chi-sono" className="hover:underline">Chi Sono</a></li>
            </ul>
          </nav>
        </header>

        {/* Main content without constraining padding for fullscreen pages */}
        <main className="w-full">
          {children}
        </main>

        {/* Footer responsive */}
        <footer className="bg-gray-200 text-gray-700 p-4 px-4 sm:px-6 mt-8 text-center">
          © 2025 Body Revival. Tutti i diritti riservati.
        </footer>
      </body>
    </html>
  );
}