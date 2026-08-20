'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home } from 'lucide-react';

export default function ReturnToHubButton({ visible, onClick }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={onClick}
          aria-label="Return to hub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="pointer-events-auto fixed right-6 bottom-8 z-40 rounded-full border border-cambridge-blue/30 bg-black/40 p-4 backdrop-blur-md md:right-10"
        >
          <Home className="h-5 w-5 text-cambridge-blue" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
