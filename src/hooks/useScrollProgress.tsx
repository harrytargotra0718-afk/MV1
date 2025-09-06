// hooks/useScrollProgress.tsx
import { useState, useEffect } from 'react';
import { trackScrollDepth } from '../utils/analytics';

interface ScrollProgress {
  progress: number;
  hasTriggered30: boolean;
  hasTriggered60: boolean;
  hasTriggered90: boolean;
  consumed30: boolean;
  consumed60: boolean;
  consumed90: boolean;
  lastTriggerTime: number;
}

export const useScrollProgress = () => {
  const [scrollData, setScrollData] = useState<ScrollProgress>({
    progress: 0,
    hasTriggered30: false,
    hasTriggered60: false,
    hasTriggered90: false,
    consumed30: false,
    consumed60: false,
    consumed90: false,
    lastTriggerTime: 0
  });

  // Reset consumed flags when progress resets to 0 (page top)
  useEffect(() => {
    if (scrollData.progress === 0) {
      setScrollData(prev => ({
        ...prev,
        consumed30: false,
        consumed60: false,
        consumed90: false,
        lastTriggerTime: 0
      }));
    }
  }, [scrollData.progress]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      // Track scroll depth milestones
      if (scrollProgress >= 25 && !scrollData.hasTriggered30) {
        trackScrollDepth(25);
      }
      if (scrollProgress >= 50 && !scrollData.hasTriggered60) {
        trackScrollDepth(50);
      }
      if (scrollProgress >= 75 && !scrollData.hasTriggered90) {
        trackScrollDepth(75);
      }
      if (scrollProgress >= 100) {
        trackScrollDepth(100);
      }
      setScrollData(prev => ({
        progress: scrollProgress,
        hasTriggered30: prev.hasTriggered30 || scrollProgress >= 30,
        hasTriggered60: prev.hasTriggered60 || scrollProgress >= 60,
        hasTriggered90: prev.hasTriggered90 || scrollProgress >= 90,
        consumed30: prev.consumed30,
        consumed60: prev.consumed60,
        consumed90: prev.consumed90,
        lastTriggerTime: prev.lastTriggerTime
      }));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to "consume" an event (mark it as handled)
  const consumeEvent = (trigger: '30' | '60' | '90') => {
    setScrollData(prev => ({
      ...prev,
      [`consumed${trigger}`]: true,
      lastTriggerTime: Date.now()
    }));
  };

  return {
    ...scrollData,
    consumeEvent
  };
};