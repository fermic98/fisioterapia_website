// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Studio di Fisioterapia",
  description: "Sito ufficiale del tuo studio di fisioterapia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between">
            <h1 className="font-bold text-xl">Fisioterapia Studio</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/servizi" className="hover:underline">Servizi</a></li>
              <li><a href="/modelli-3d" className="hover:underline">Modelli 3D</a></li>
              <li><a href="/contatti" className="hover:underline">Contatti</a></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto my-8">
          {children}
        </main>

        <footer className="bg-gray-200 text-gray-700 p-4 mt-8 text-center">
          © 2025 Studio di Fisioterapia. Tutti i diritti riservati.
        </footer>
      </body>
    </html>
  );
}
