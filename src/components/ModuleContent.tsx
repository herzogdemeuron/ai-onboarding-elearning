import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Module } from '../types';
import { useProgress } from '../context/ProgressContext';
import { VideoPlayer } from './VideoPlayer';
import { QuizCard } from './QuizCard';
import { PrincipleCards } from './PrincipleCards';
import { ClickDemo } from './ClickDemo';
import { SortingActivity } from './SortingActivity';
import { ReflectionActivity } from './ReflectionActivity';
import styles from './ModuleContent.module.css';

interface ModuleContentProps {
  module: Module;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function ModuleContent({ module, onNext, onPrevious, isFirst, isLast }: ModuleContentProps) {
  const { completeModule, isModuleCompleted } = useProgress();
  const [videoWatched, setVideoWatched] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [principlesCompleted, setPrinciplesCompleted] = useState(false);
  const [clickDemoCompleted, setClickDemoCompleted] = useState(false);
  const [sortingActivityCompleted, setSortingActivityCompleted] = useState(false);
  const [reflectionActivityCompleted, setReflectionActivityCompleted] = useState(false);

  const moduleCompleted = isModuleCompleted(module.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setVideoWatched(moduleCompleted);
    setQuizCompleted(moduleCompleted);
    setShowQuiz(false);
    setPrinciplesCompleted(moduleCompleted);
    setClickDemoCompleted(moduleCompleted);
    setSortingActivityCompleted(moduleCompleted);
    setReflectionActivityCompleted(moduleCompleted);
  }, [module.id, moduleCompleted]);

  const handleVideoWatched = () => {
    setVideoWatched(true);
  };

  const handleStartModule = () => {
    if (module.content.quiz && module.content.quiz.length > 0) {
      setShowQuiz(true);
    } else {
      completeModule(module.id);
      onNext();
    }
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  const handleQuizContinue = () => {
    completeModule(module.id);
    onNext();
  };

  const handlePrinciplesComplete = () => {
    setPrinciplesCompleted(true);
    completeModule(module.id);
  };

  const handleClickDemoComplete = () => {
    setClickDemoCompleted(true);
    completeModule(module.id);
  };

  const handleSortingActivityComplete = () => {
    setSortingActivityCompleted(true);
    completeModule(module.id);
  };

  const handleReflectionActivityComplete = () => {
    setReflectionActivityCompleted(true);
    completeModule(module.id);
  };

  const handleContinue = () => {
    onNext();
  };

  const hasQuiz = !!module.content.quiz && module.content.quiz.length > 0;
  const hasPrincipleCards = !!module.content.principleCards && module.content.principleCards.length > 0;
  const hasClickDemo = !!module.content.clickDemo;
  const hasSortingActivity = !!module.content.sortingActivity;
  const hasReflectionActivity = !!module.content.reflectionActivity;

  // Module with click demo (Module 4, 5, 6)
  if (hasClickDemo) {
    return (
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{module.id}. {module.content.heading}</h1>
          <p className={styles.description}>{module.content.description}</p>
        </div>

        <div className={styles.clickDemoSection}>
          <ClickDemo 
            demo={module.content.clickDemo!}
            onComplete={handleClickDemoComplete}
            isCompleted={isModuleCompleted(module.id)}
          />
        </div>

        <footer className={styles.footer}>
          <button
            className={styles.secondaryButton}
            onClick={onPrevious}
            disabled={isFirst}
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          <button
            className={styles.primaryButton}
            onClick={handleContinue}
            disabled={!clickDemoCompleted && !moduleCompleted}
          >
            {isLast ? 'Complete Course' : 'Mark Complete & Continue'}
            <ArrowRight size={16} />
          </button>
        </footer>
      </div>
    );
  }

  // Module with sorting activity (Module 7)
  if (hasSortingActivity) {
    return (
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{module.id}. {module.content.heading}</h1>
          <p className={styles.description}>{module.content.description}</p>
        </div>

        <div className={styles.sortingSection}>
          <SortingActivity 
            activity={module.content.sortingActivity!}
            onComplete={handleSortingActivityComplete}
            isCompleted={isModuleCompleted(module.id)}
          />
        </div>

        <footer className={styles.footer}>
          <button
            className={styles.secondaryButton}
            onClick={onPrevious}
            disabled={isFirst}
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          <button
            className={styles.primaryButton}
            onClick={handleContinue}
            disabled={!sortingActivityCompleted && !moduleCompleted}
          >
            {isLast ? 'Complete Course' : 'Mark Complete & Continue'}
            <ArrowRight size={16} />
          </button>
        </footer>
      </div>
    );
  }

  // Module with reflection activity (Module 8)
  if (hasReflectionActivity) {
    return (
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{module.id}. {module.content.heading}</h1>
          <p className={styles.description}>{module.content.description}</p>
        </div>

        <div className={styles.reflectionSection}>
          <ReflectionActivity 
            activity={module.content.reflectionActivity!}
            onComplete={handleReflectionActivityComplete}
            isCompleted={isModuleCompleted(module.id)}
          />
        </div>

        <footer className={styles.footer}>
          <button
            className={styles.secondaryButton}
            onClick={onPrevious}
            disabled={isFirst}
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          <button
            className={styles.primaryButton}
            onClick={handleContinue}
            disabled={!reflectionActivityCompleted && !moduleCompleted}
          >
            {isLast ? 'Complete Course' : 'Mark Complete & Continue'}
            <ArrowRight size={16} />
          </button>
        </footer>
      </div>
    );
  }

  // Module with principle cards (Module 3)
  if (hasPrincipleCards) {
    return (
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{module.id}. {module.content.heading}</h1>
          <p className={styles.description}>{module.content.description}</p>
        </div>

        <div className={styles.principlesSection}>
          <PrincipleCards 
            cards={module.content.principleCards!}
            onComplete={handlePrinciplesComplete}
            isCompleted={isModuleCompleted(module.id)}
          />
        </div>

        <footer className={styles.footer}>
          <button
            className={styles.secondaryButton}
            onClick={onPrevious}
            disabled={isFirst}
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          <button
            className={styles.primaryButton}
            onClick={handleContinue}
            disabled={!principlesCompleted && !moduleCompleted}
          >
            {isLast ? 'Complete Course' : 'Mark Complete & Continue'}
            <ArrowRight size={16} />
          </button>
        </footer>
      </div>
    );
  }

  // Module with quiz view
  if (showQuiz && hasQuiz) {
    const handleBackToVideo = () => {
      setShowQuiz(false);
    };

    return (
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{module.id}. {module.content.heading}</h1>
          <p className={styles.description}>{module.content.description}</p>
        </div>

        <div className={styles.quizSection}>
          <QuizCard 
            questions={module.content.quiz!} 
            onComplete={handleQuizComplete}
            isCompleted={isModuleCompleted(module.id)}
          />
        </div>

        <footer className={styles.footer}>
          <button
            className={styles.secondaryButton}
            onClick={handleBackToVideo}
          >
            <ArrowLeft size={16} />
            Back to Video
          </button>

          <button
            className={styles.primaryButton}
            onClick={handleQuizContinue}
            disabled={!quizCompleted && !moduleCompleted}
          >
            {isLast ? 'Complete Course' : 'Mark Complete & Continue'}
            <ArrowRight size={16} />
          </button>
        </footer>
      </div>
    );
  }

  // Default view with video
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{module.id}. {module.content.heading}</h1>
        <p className={styles.description}>{module.content.description}</p>
      </div>

      {module.content.videoTutorial && (
        <div className={styles.videoSection}>
          <VideoPlayer 
            video={module.content.videoTutorial} 
            onWatched={handleVideoWatched}
            isModuleCompleted={isModuleCompleted(module.id)}
          />
        </div>
      )}

      <footer className={styles.footer}>
        <button
          className={styles.secondaryButton}
          onClick={onPrevious}
          disabled={isFirst}
        >
          <ArrowLeft size={16} />
          Previous
        </button>

        <button
          className={styles.primaryButton}
          onClick={handleStartModule}
          disabled={!videoWatched && !moduleCompleted}
        >
          {'Mark Complete & Continue'}
          <ArrowRight size={16} />
        </button>
      </footer>
    </div>
  );
}
