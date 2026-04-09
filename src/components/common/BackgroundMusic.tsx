'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const audio = new Audio(`${basePath}/musics/music_theme.mp3`);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    const startPlayback = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().catch(() => {});
      window.removeEventListener('click', startPlayback);
      window.removeEventListener('scroll', startPlayback);
      window.removeEventListener('touchstart', startPlayback);
      window.removeEventListener('keydown', startPlayback);
    };

    const handlePause = () => {
      audio.pause();
    };

    const handleResume = () => {
      if (startedRef.current) {
        audio.play().catch(() => {});
      }
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
      window.removeEventListener('click', startPlayback);
      window.removeEventListener('scroll', startPlayback);
      window.removeEventListener('touchstart', startPlayback);
      window.removeEventListener('keydown', startPlayback);
      window.removeEventListener('bgmusic:pause', handlePause);
      window.removeEventListener('bgmusic:resume', handleResume);
    };
  }, []);

  return null;
}
