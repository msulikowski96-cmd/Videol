import { useEffect, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { QuoteScene1 } from './scenes/QuoteScene1';
import { QuoteScene2 } from './scenes/QuoteScene2';
import { QuoteScene3 } from './scenes/QuoteScene3';
import { QuoteScene4 } from './scenes/QuoteScene4';
import { QuoteScene5 } from './scenes/QuoteScene5';
import { QuoteScene6 } from './scenes/QuoteScene6';

export const SCENE_DURATIONS: Record<string, number> = {
  scene1: 5000,
  scene2: 5000,
  scene3: 5000,
  scene4: 5000,
  scene5: 5000,
  scene6: 6000,
};

const SCENE_COMPONENTS: Record<string, ComponentType> = {
  scene1: QuoteScene1,
  scene2: QuoteScene2,
  scene3: QuoteScene3,
  scene4: QuoteScene4,
  scene5: QuoteScene5,
  scene6: QuoteScene6,
};

const SCENE_KEYS = Object.keys(SCENE_DURATIONS);

// Slow moving calm background blobs
const BACKGROUND_POSITIONS = [
  { x: '20vw', y: '20vh', scale: 1 },
  { x: '60vw', y: '60vh', scale: 1.2 },
  { x: '30vw', y: '70vh', scale: 0.9 },
  { x: '70vw', y: '30vh', scale: 1.1 },
  { x: '40vw', y: '40vh', scale: 1.3 },
  { x: '50vw', y: '50vh', scale: 1 },
];

export default function QuoteVideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = SCENE_KEYS.indexOf(baseSceneKey) !== -1 ? SCENE_KEYS.indexOf(baseSceneKey) : 0;
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey] ?? QuoteScene1;

  const pos = BACKGROUND_POSITIONS[sceneIndex] ?? BACKGROUND_POSITIONS[0];

  return (
    <div className="relative w-full h-full lg:max-w-[500px] lg:aspect-[9/16] lg:mx-auto lg:my-8 bg-[#050508] overflow-hidden lg:rounded-3xl lg:shadow-[0_0_80px_rgba(0,0,0,0.8)] lg:border lg:border-white/5 font-serif">
      {/* Background Image with slow zoom */}
      <motion.img 
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        src="https://storage.googleapis.com/aistudio-dev-attachments-public/1ee9aedd-b0e2-45a7-9ac6-02e75eacec1e-image" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Deep Emotional moody gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,24,41,0.1)_0%,rgba(5,5,8,0.6)_80%)]" />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none z-20" />
      
      {/* Slow moving particles / dust motes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.2 + 0.05,
              filter: `blur(${Math.random() * 2}px)`
            }}
            animate={{
              y: [0, -150 - Math.random() * 100],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0, Math.random() * 0.2 + 0.05, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15
            }}
          />
        ))}
      </div>

      {/* Very subtle ambient light interacting with scenes */}
      <motion.div
        className="absolute rounded-full pointer-events-none mix-blend-screen z-0"
        style={{
          width: '120vw', height: '120vw',
          background: 'radial-gradient(circle, rgba(60,80,140,0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: pos.x, y: pos.y, scale: pos.scale }}
        transition={{ duration: 8, ease: "easeInOut" }}
      />
      
      {/* Noise overlay for cinematic film feel */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-30" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSceneKey} 
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.97 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(15px)', transition: { duration: 1.2 } }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-10 flex items-center justify-center p-8 text-center"
        >
          {SceneComponent && <SceneComponent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
