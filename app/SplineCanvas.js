'use client';

import dynamic from 'next/dynamic';

// ssr: false is required — the Spline runtime touches window/canvas at
// load time and will throw if Next.js tries to render it on the server.
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const SCENE_URL = 'https://prod.spline.design/3FXSnzVhojJcBDVj/scene.splinecode';

export default function SplineCanvas({ onLoad }) {
  return (
    <div className="fixed inset-0 z-0 h-[100dvh] w-full bg-gradient-to-b from-black via-[#000814] to-oxford-blue">
      <div className="absolute inset-0">
        <Spline scene={SCENE_URL} onLoad={onLoad} />
      </div>
    </div>
  );
}
