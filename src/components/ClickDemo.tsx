import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, ArrowRight } from 'lucide-react';
import { ClickDemo as ClickDemoType } from '../types';
import { getAssetPath } from '../utils/assetPath';
import styles from './ClickDemo.module.css';

const OVERVIEW_COLORS = ['#06B6D4', '#22C55E', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

interface ClickDemoProps {
  demo: ClickDemoType;
  onComplete: () => void;
  isCompleted: boolean;
}

export function ClickDemo({ demo, onComplete, isCompleted }: ClickDemoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showStartOverlay, setShowStartOverlay] = useState(!isCompleted);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const typingIntervalRef = useRef<number | null>(null);

  const step = demo.steps[currentStep];
  const isLastStep = currentStep === demo.steps.length - 1;
  const allStepsCompleted = completedSteps.size === demo.steps.length;
  const hasTypingSimulation = !!step.typingSimulation;
  const isOverviewStep = !!step.isOverview && !!step.overviewAreas;

  // Reset state when demo changes (switching modules)
  useEffect(() => {
    setCurrentStep(0);
    setShowStartOverlay(!isCompleted);
    setIsTyping(false);
    setTypedText('');
    setTypingComplete(false);
    setImagesLoaded(false);
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    // If already completed, populate all steps; otherwise reset
    if (isCompleted) {
      setCompletedSteps(new Set(demo.steps.map((_, idx) => idx)));
    } else {
      setCompletedSteps(new Set());
    }
  }, [demo.title]);

  // Preload all images
  useEffect(() => {
    const imageUrls = new Set<string>();
    demo.steps.forEach(s => {
      imageUrls.add(s.screenshot);
      if (s.typingSimulation?.screenshotDuringTyping) {
        imageUrls.add(s.typingSimulation.screenshotDuringTyping);
      }
    });

    let loadedCount = 0;
    const totalImages = imageUrls.size;

    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = getAssetPath(url);
    });
  }, [demo.steps]);

  // Determine which screenshot to show
  const currentScreenshot = (isTyping || typingComplete) && step.typingSimulation?.screenshotDuringTyping 
    ? getAssetPath(step.typingSimulation.screenshotDuringTyping) 
    : getAssetPath(step.screenshot);

  useEffect(() => {
    if (allStepsCompleted && !isCompleted) {
      onComplete();
    }
  }, [allStepsCompleted, isCompleted, onComplete]);

  useEffect(() => {
    setIsTyping(false);
    setTypedText('');
    setTypingComplete(false);
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
  }, [currentStep]);

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const handleStartTutorial = () => {
    setShowStartOverlay(false);
  };

  const handleRestartTutorial = () => {
    setCurrentStep(0);
    setCompletedSteps(new Set());
    setIsTyping(false);
    setTypedText('');
    setTypingComplete(false);
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
  };

  const startTypingSimulation = () => {
    if (!step.typingSimulation) return;
    
    setIsTyping(true);
    setTypedText('');
    setTypingComplete(false);
    
    const fullText = step.typingSimulation.text;
    let charIndex = 0;
    
    typingIntervalRef.current = window.setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }
        setTypingComplete(true);
        setTimeout(() => {
          if (isLastStep) {
            // Mark all steps as completed when typing completes on the last step
            const allSteps = new Set(demo.steps.map((_, idx) => idx));
            setCompletedSteps(allSteps);
          } else {
            setCompletedSteps(prev => new Set([...prev, currentStep]));
            setCurrentStep(currentStep + 1);
          }
        }, 1000);
      }
    }, 50);
  };

  const handleClickArea = () => {
    if (hasTypingSimulation && !isTyping && !typingComplete) {
      startTypingSimulation();
      return;
    }
    
    if (isLastStep) {
      // Mark all steps as completed when clicking the last step's click area
      const allSteps = new Set(demo.steps.map((_, idx) => idx));
      setCompletedSteps(allSteps);
    } else {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < demo.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleOverviewContinue = () => {
    if (isLastStep) {
      const allSteps = new Set(demo.steps.map((_, idx) => idx));
      setCompletedSteps(allSteps);
    } else {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={styles.container}>
      {/* Top bar with step info */}
      <div className={`${styles.stepIndicator} ${showStartOverlay && !isCompleted ? styles.inactive : ''}`}>
        {showStartOverlay && !isCompleted ? (
          <span className={styles.stepNumber}>&nbsp;</span>
        ) : (
          <>
            <span className={styles.stepNumber}>Step {String(step.stepNumber).padStart(2, '0')}</span>
            <span className={styles.stepInstruction}>{step.instruction}</span>
          </>
        )}
      </div>

      {/* Screenshot */}
      <div className={styles.screenshotContainer}>
        <img 
          src={currentScreenshot} 
          alt={`Step ${step.stepNumber}`}
          className={styles.screenshot}
        />
        
        {showStartOverlay && !isCompleted ? (
          <div className={styles.startOverlay}>
            <button 
              className={`${styles.startButton} ${!imagesLoaded ? styles.startButtonLoading : ''}`} 
              onClick={handleStartTutorial}
              disabled={!imagesLoaded}
            >
              <span className={styles.startTitle}>
                {imagesLoaded ? 'Start Tutorial' : 'Loading...'}
              </span>
            </button>
            <div className={styles.startInfo}>
              <span>Total Steps — {String(demo.totalSteps).padStart(2, '0')}</span>
              <span>Completion Time — {demo.estimatedTime}</span>
            </div>
          </div>
        ) : allStepsCompleted ? (
          <div className={styles.completedOverlayCenter}>
            <div className={styles.completedButton}>
              <span className={styles.completedTitle}>Completed</span>
            </div>
            <button className={styles.restartButton} onClick={handleRestartTutorial}>
              <RotateCcw size={16} />
              <span>Restart Tutorial</span>
            </button>
          </div>
        ) : isOverviewStep ? (
          <>
            {step.overviewAreas?.map((area, index) => (
              <div key={area.label}>
                {area.rects.map((rect, rectIndex) => (
                  <div key={`${area.label}-rect-${rectIndex}`}>
                    <div 
                      className={styles.overviewArea}
                      style={{
                        left: `${rect.x}%`,
                        top: `${rect.y}%`,
                        width: `${rect.width}%`,
                        height: `${rect.height}%`,
                        borderColor: OVERVIEW_COLORS[index % OVERVIEW_COLORS.length],
                        boxShadow: `0 0 0 0 ${OVERVIEW_COLORS[index % OVERVIEW_COLORS.length]}40`,
                      }}
                    />
                    <div 
                      className={styles.overviewLabel}
                      style={{
                        left: `${rect.x + rect.width}%`,
                        top: `${rect.y + rect.height}%`,
                        transform: 'translate(-100%, -100%)',
                        backgroundColor: OVERVIEW_COLORS[index % OVERVIEW_COLORS.length],
                      }}
                    >
                      <span>{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            {!isTyping && !typingComplete && step.clickArea && (
              <>
                <div 
                  className={styles.clickArea}
                  style={{
                    left: `${step.clickArea.x}%`,
                    top: `${step.clickArea.y}%`,
                    width: `${step.clickArea.width}%`,
                    height: `${step.clickArea.height}%`,
                  }}
                  onClick={step.clickType === 'right' ? undefined : handleClickArea}
                  onContextMenu={step.clickType === 'right' ? (e) => {
                    e.preventDefault();
                    handleClickArea();
                  } : undefined}
                />
                <div 
                  className={`${styles.clickBubble} ${step.clickArea.y < 10 ? styles.clickBubbleBelow : ''}`}
                  style={{
                    left: `${step.clickArea.x + step.clickArea.width / 2}%`,
                    top: step.clickArea.y < 10 
                      ? `${step.clickArea.y + step.clickArea.height + 1.5}%`
                      : `${step.clickArea.y - 1.5}%`,
                  }}
                >
                  <span>{step.clickType === 'right' ? 'right-click' : 'click'}</span>
                </div>
              </>
            )}
            {!step.clickArea && (
              <div 
                className={styles.completionOverlay}
                onClick={handleClickArea}
              />
            )}
            
            {hasTypingSimulation && isTyping && step.typingSimulation && (
              <div 
                className={styles.typingOverlay}
                style={{
                  left: `${step.typingSimulation.inputPosition.x}%`,
                  top: `${step.typingSimulation.inputPosition.y}%`,
                  width: `${step.typingSimulation.inputPosition.width}%`,
                  height: `${step.typingSimulation.inputPosition.height}%`,
                }}
              >
                <span className={styles.typingText}>{typedText}</span>
                <span className={styles.typingCursor}>|</span>
              </div>
            )}
          </>
        )}

        {/* Overview legend - inside screenshot as overlay */}
        {isOverviewStep && !showStartOverlay && !allStepsCompleted && step.overviewAreas && (
          <div className={styles.overviewLegend}>
            <div className={styles.legendItems}>
              {step.overviewAreas.map((area, index) => (
                <div key={area.label} className={styles.legendItem}>
                  <span 
                    className={styles.legendNumber}
                    style={{ backgroundColor: OVERVIEW_COLORS[index % OVERVIEW_COLORS.length] }}
                  >
                    {index + 1}
                  </span>
                  <div className={styles.legendText}>
                    <span className={styles.legendLabel}>{area.label}</span>
                    <span className={styles.legendDescription}>{area.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.continueButton} onClick={handleOverviewContinue}>
              Continue
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Bottom navigation with arrows and page indicator */}
      <div className={styles.stepNavigation}>
        <button 
          className={styles.arrowButton}
          onClick={handlePreviousStep}
          disabled={currentStep === 0 || showStartOverlay}
        >
          <ChevronLeft size={20} />
        </button>
        <span className={styles.stepProgress}>
          {currentStep + 1}/{demo.steps.length}
        </span>
        <button 
          className={styles.arrowButton}
          onClick={handleNextStep}
          disabled={isLastStep || showStartOverlay}
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
}
