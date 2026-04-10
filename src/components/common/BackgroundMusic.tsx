'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const pausedByVideoRef = useRef(false);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const audio = new Audio(`${basePath}/musics/music_theme.mp3`);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    const removeInteractionListeners = () => {
      window.removeEventListener('click', startPlayback);
      window.removeEventListener('scroll', startPlayback);
      window.removeEventListener('touchstart', startPlayback);
      window.removeEventListener('keydown', startPlayback);
    };

    const startPlayback = () => {
      if (startedRef.current) return;
      if (pausedByVideoRef.current) return;
      audio.play().then(() => {
        startedRef.current = true;
        removeInteractionListeners();
      }).catch(() => {});
    };

    const handlePause = () => {
      pausedByVideoRef.current = true;
      audio.pause();
    };

    const handleResume = () => {
      pausedByVideoRef.current = false;
      audio.play().then(() => {
        if (!startedRef.current) {
          startedRef.current = true;
          removeInteractionListeners();
        }
      }).catch(() => {});
    };

    window.addEventListener('click', startPlayback);
    window.addEventListener('scroll', startPlayback);
    window.addEventListener('touchstart', startPlayback);
    window.addEventListener('keydown', startPlayback);
    window.addEventListener('bgmusic:pause', handlePause);
    window.addEventListener('bgmusic:resume', handleResume);

    return () => {
      audio.pause();
      audio.src = '';
      removeInteractionListeners();
      window.removeEventListener('bgmusic:pause', handlePause);
      window.removeEventListener('bgmusic:resume', handleResume);
    };
  }, []);

  return null;
}
