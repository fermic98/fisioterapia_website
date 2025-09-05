// src/app/page.js
import React from "react";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Sfondo video parallax */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero-video.mp4"
      />

      {/* Overlay scuro per leggibilità */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Contenuto centrale */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Comprendi il tuo corpo e prenditene cura
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-xl">
          Approfondimenti, articoli e modelli 3D per conoscere e migliorare il tuo corpo.
        </p>
        <a
          href="/modelli-3d"
          className="px-5 py-3 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Esplora i modelli 3D
        </a>
      </div>
    </main>

  );
}
