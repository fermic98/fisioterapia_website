// src/app/page.js
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6 text-blue-600">
        Benvenuto nel sito del tuo studio di Fisioterapia
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Qui puoi presentare i tuoi servizi, mostrare modelli 3D interattivi del corpo umano
        e fornire informazioni utili ai tuoi pazienti.
      </p>
      <a
        href="/modelli-3d"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Visualizza modelli 3D
      </a>
    </main>
  );
}
