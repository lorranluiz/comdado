'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

export default function ProgressBar() {
  const scrollPosition = useScrollPosition();
  
  // Calculate progress percentage based on page scroll
  const getScrollProgress = () => {
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const documentHeight = typeof document !== 'undefined' 
      ? document.documentElement.scrollHeight
      : 0;
    const scrolled = (scrollPosition / (documentHeight - windowHeight)) * 100;
    return Math.min(Math.max(scrolled, 0), 100);
  };

  const progress = typeof window !== 'undefined' ? getScrollProgress() : 0;
  const level = Math.floor(progress / 20) + 1; // 5 levels (1-5)
  
  const getLevelInfo = (lvl: number) => {
    const levels = [
      { name: 'Iniciante', color: 'from-stone-400 to-stone-500', icon: '⚔️' },
      { name: 'Explorador', color: 'from-amber-300 to-amber-500', icon: '🗺️' },
      { name: 'Aventureiro', color: 'from-yellow-400 to-amber-600', icon: '🎯' },
      { name: 'Especialista', color: 'from-amber-500 to-yellow-600', icon: '⭐' },
      { name: 'Mestre', color: 'from-yellow-400 to-amber-500', icon: '👑' },
    ];
    return levels[Math.min(lvl - 1, 4)];
  };

  const currentLevel = getLevelInfo(level);

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-b from-stone-900/95 to-stone-900/80 backdrop-blur-sm border-b border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="py-2 flex items-center gap-4 text-xs md:text-sm">
          {/* Level Icon and Name */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <span className="text-lg" role="img" aria-label={currentLevel.name}>
              {currentLevel.icon}
            </span>
            <span className="font-semibold text-amber-100 hidden sm:inline">
              Nível {level}
            </span>
            <span className="text-amber-300/80 hidden md:inline">
              • {currentLevel.name}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 relative h-3 bg-stone-800 rounded-full overflow-hidden border border-amber-500/30">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse" />
            
            {/* Progress fill */}
            <div
              className={cn(
                'absolute inset-0 bg-gradient-to-r transition-all duration-300 ease-out',
                currentLevel.color
              )}
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>

            {/* Progress text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white drop-shadow-lg">
                {Math.round(progress)}% XP
              </span>
            </div>
          </div>

          {/* Next Level Indicator */}
          <div className="hidden lg:flex items-center gap-2 min-w-[100px] text-amber-300/60 text-xs">
            {level < 5 ? (
              <>
                <span>Próximo:</span>
                <span className="font-semibold">{getLevelInfo(level + 1).icon}</span>
              </>
            ) : (
              <span className="text-yellow-300 font-semibold">✨ MAX</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
