import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProgressState } from '../types';

interface ProgressContextType {
  progress: ProgressState;
  setCurrentModule: (moduleId: number) => void;
  completeModule: (moduleId: number) => void;
  isModuleCompleted: (moduleId: number) => boolean;
  isModuleAccessible: (moduleId: number) => boolean;
  resetProgress: () => void;
}

const defaultProgress: ProgressState = {
  currentModule: 1,
  completedModules: [],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('ai-onboarding-progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        startedAt: parsed.startedAt ? new Date(parsed.startedAt) : undefined
      };
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem('ai-onboarding-progress', JSON.stringify(progress));
  }, [progress]);

  const setCurrentModule = (moduleId: number) => {
    setProgress(prev => ({
      ...prev,
      currentModule: moduleId,
      startedAt: prev.startedAt || new Date()
    }));
  };

  const completeModule = (moduleId: number) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId]
    }));
  };

  const isModuleCompleted = (moduleId: number) => {
    return progress.completedModules.includes(moduleId);
  };

  const isModuleAccessible = (moduleId: number) => {
    if (moduleId === 1) return true;
    if (progress.completedModules.includes(moduleId)) return true;
    const highestCompleted = Math.max(0, ...progress.completedModules);
    return moduleId === highestCompleted + 1;
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    localStorage.removeItem('ai-onboarding-progress');
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      setCurrentModule,
      completeModule,
      isModuleCompleted,
      isModuleAccessible,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
