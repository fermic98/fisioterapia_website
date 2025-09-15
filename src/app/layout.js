import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Body Revival",
  description: "Sito ufficiale di Body Revival, approfondimenti sul corpo umano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-gray-50 text-gray-800 font-sans min-h-screen">
        {/* Navbar con burger menu */}
        <Navbar />

        {/* Main content senza padding-top */}
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