'use client';

import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function ShoulderModel({ playAnimation = false, animationName = 'shoulder_flaction' }) {
  const group = useRef();
  
  // You'll need to replace this with the path to your GLB file
  // Place your GLB file in the public folder and update this path
  const { scene, animations } = useGLTF('/models/shoulder_model.glb');
  const { actions, names } = useAnimations(animations, group);
  

  useEffect(() => {
    // Check if the specified animation exists
    if (names.includes(animationName)) {
      if (playAnimation) {
        // Start animation
        actions[animationName].reset().fadeIn(0.5).play();
      } else {
        // Pause animation
        actions[animationName].fadeOut(0.5);
      }
    } else {
      console.warn(`Animation "${animationName}" not found in model. Available animations: ${names.join(', ')}`);
    }
    
    return () => {
      // Cleanup - only stop actions that exist
      if (actions) {
        Object.values(actions).forEach(action => {
          if (action && typeof action.stop === 'function') {
            action.stop();
          }
        });
      }
    };
  }, [playAnimation, animationName, actions, names]);
  
  return (
    <group ref={group}>
      <primitive object={scene} scale={1} position={[0, -1, 0]} />
    </group>
  );
}

// Preload the model
useGLTF.preload('/models/shoulder_model.glb');