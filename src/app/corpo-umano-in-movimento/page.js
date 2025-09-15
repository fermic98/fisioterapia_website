'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useProgress } from '@react-three/drei';

// Dynamic import of the model component to prevent SSR issues
const ShoulderModel = dynamic(() => import('@/components/ShoulderModel'), { ssr: false });

// Loading component
function Loader() {
  const { progress } = useProgress();
  return <p className="text-center text-xl">Caricamento modello 3D: {progress.toFixed(0)}%</p>;
}

export default function CorpoUmanoInMovimento() {
  const [animationPlaying, setAnimationPlaying] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - aggiunto pt-20 per lo spazio della navbar */}
      <div className="pt-20 pb-8 sm:py-12 bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Il corpo umano in movimento
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white text-center mt-3 sm:mt-4">
            Esplora la biomeccanica e la cinematica articolare attraverso modelli 3D interattivi
          </p>
        </div>
      </div>
      
      {/* Model Viewer Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">Flessione della spalla</h2>
          <p className="text-base sm:text-lg text-gray-600">
            La flessione della spalla è un movimento fondamentale che consente di sollevare il braccio anteriormente. 
            Questo movimento coinvolge principalmente l'articolazione gleno-omerale e richiede l'azione coordinata 
            di diversi muscoli, tra cui il deltoide anteriore e il sovraspinato.
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <button 
            onClick={() => setAnimationPlaying(!animationPlaying)}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors"
          >
            {animationPlaying ? 'Pausa Animazione' : 'Avvia Animazione'}
          </button>
        </div>
        
        {/* 3D Model Canvas */}
        <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] bg-gray-100 rounded-xl shadow-lg overflow-hidden">
          <Suspense fallback={<Loader />}>
            <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
              {/* Background color */}
              <color attach="background" args={["#f3f4f6"]} /> {/* Light gray background */}

              {/* Lighting setup */}
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <directionalLight position={[-5, 5, -5]} intensity={0.5} />
              <hemisphereLight intensity={0.3} groundColor="#f3f4f6" />

              {/* Model */}
              <ShoulderModel playAnimation={animationPlaying} animationName="shoulder_flaction" />

              {/* Controls */}
              <OrbitControls />
            </Canvas>
          </Suspense>
        </div>
        
        {/* Instructions */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Come interagire con il modello:</h3>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700">
            <li>Ruota la visuale: clicca e trascina</li>
            <li>Zoom: usa la rotellina del mouse o pinch (su touch screen)</li>
            <li>Sposta: clicca con il tasto destro e trascina</li>
            <li>Avvia/pausa l'animazione: usa il pulsante sopra il modello</li>
          </ul>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="container mx-auto px-4 py-8 sm:py-12 bg-white">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Biomeccanica della flessione</h2>
            <p className="text-sm sm:text-base text-gray-700">
              Durante la flessione della spalla, l'omero si muove anteriormente e verso l'alto rispetto alla scapola.
              Il movimento completo permette un'escursione di circa 180 gradi, anche se richiede una rotazione della
              scapola (ritmo scapolo-omerale) dopo i primi 60 gradi di movimento.
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Muscoli coinvolti</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700">
              <li>Deltoide anteriore (principale motore)</li>
              <li>Coracobrachiale</li>
              <li>Capo lungo del bicipite brachiale</li>
              <li>Sovraspinato (particolarmente attivo nei primi 90° di flessione)</li>
              <li>Trapezio e dentato anteriore (stabilizzazione della scapola)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}