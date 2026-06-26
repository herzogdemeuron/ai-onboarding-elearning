import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, GripVertical, RotateCcw, Layers } from 'lucide-react';
import { SortingActivity as SortingActivityType, SortingCard } from '../types';
import styles from './SortingActivity.module.css';

interface SortingActivityProps {
  activity: SortingActivityType;
  onComplete: () => void;
  isCompleted: boolean;
}

type FeedbackState = 'none' | 'correct' | 'incorrect';

export function SortingActivity({ activity, onComplete, isCompleted }: SortingActivityProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [sortedCards, setSortedCards] = useState<{ card: SortingCard; category: 'good' | 'risky' }[]>([]);
  const [feedback, setFeedback] = useState<FeedbackState>('none');
  const [draggedOver, setDraggedOver] = useState<'good' | 'risky' | null>(null);
  const [isActivityComplete, setIsActivityComplete] = useState(false);

  const currentCard = activity.cards[currentCardIndex];
  const totalCards = activity.cards.length;
  const progress = sortedCards.length;

  useEffect(() => {
    if (isCompleted) {
      setIsActivityComplete(true);
      setSortedCards(activity.cards.map(card => ({ card, category: card.correctCategory })));
    }
  }, [isCompleted, activity.cards]);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', currentCard.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, category: 'good' | 'risky') => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDraggedOver(category);
  };

  const handleDragLeave = () => {
    setDraggedOver(null);
  };

  const handleDrop = (e: React.DragEvent, category: 'good' | 'risky') => {
    e.preventDefault();
    setDraggedOver(null);

    if (feedback !== 'none') return;

    const isCorrect = currentCard.correctCategory === category;

    if (isCorrect) {
      setFeedback('correct');
      setTimeout(() => {
        setSortedCards(prev => [...prev, { card: currentCard, category }]);
        setFeedback('none');
        
        if (currentCardIndex < totalCards - 1) {
          setCurrentCardIndex(prev => prev + 1);
        } else {
          setIsActivityComplete(true);
          onComplete();
        }
      }, 1000);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback('none');
      }, 1500);
    }
  };

  const handleCategoryClick = (category: 'good' | 'risky') => {
    if (feedback !== 'none' || isActivityComplete) return;

    const isCorrect = currentCard.correctCategory === category;

    if (isCorrect) {
      setFeedback('correct');
      setTimeout(() => {
        setSortedCards(prev => [...prev, { card: currentCard, category }]);
        setFeedback('none');
        
        if (currentCardIndex < totalCards - 1) {
          setCurrentCardIndex(prev => prev + 1);
        } else {
          setIsActivityComplete(true);
          onComplete();
        }
      }, 1000);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback('none');
      }, 1500);
    }
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setSortedCards([]);
    setFeedback('none');
    setIsActivityComplete(false);
  };

  const goodCards = sortedCards.filter(s => s.category === 'good');
  const riskyCards = sortedCards.filter(s => s.category === 'risky');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Layers size={18} />
        <span>Sorting Activity</span>
        <span className={styles.headerProgress}>
          {isActivityComplete ? (
            <span className={styles.completedBadge}>
              <CheckCircle2 size={14} />
              Completed
            </span>
          ) : (
            `${progress}/${totalCards} sorted`
          )}
        </span>
      </div>

      <div className={styles.progressBarContainer}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${(progress / totalCards) * 100}%` }}
        />
      </div>

      <div className={styles.content}>
        {!isActivityComplete && currentCard && (
          <div className={styles.cardArea}>
          <div 
            className={`${styles.currentCard} ${feedback === 'correct' ? styles.correct : ''} ${feedback === 'incorrect' ? styles.incorrect : ''}`}
            draggable={feedback === 'none'}
            onDragStart={handleDragStart}
          >
            <GripVertical size={20} className={styles.dragHandle} />
            <p className={styles.cardText}>{currentCard.text}</p>
            {feedback === 'correct' && (
              <div className={styles.checkmarkOverlay}>
                <span className={styles.correctText}>Correct</span>
              </div>
            )}
          </div>
            {feedback === 'incorrect' && (
              <p className={styles.feedbackText}>Try again! Think about whether this is a safe or risky practice.</p>
            )}
            {feedback === 'none' && (
              <p className={styles.instruction}>{activity.instruction}</p>
            )}
          </div>
        )}

        <div className={styles.columnsContainer}>
          <div 
            className={`${styles.column} ${styles.goodColumn} ${draggedOver === 'good' ? styles.dragOver : ''} ${isActivityComplete ? styles.columnComplete : ''}`}
            onDragOver={(e) => handleDragOver(e, 'good')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'good')}
            onClick={() => !isActivityComplete && handleCategoryClick('good')}
          >
            <div className={styles.columnHeader}>
              <CheckCircle2 size={20} />
              <span>{activity.categories.good}</span>
            </div>
            <div className={styles.columnContent}>
              {goodCards.map(({ card }) => (
                <div key={card.id} className={styles.sortedCard}>
                  <p>{card.text}</p>
                </div>
              ))}
              {!isActivityComplete && goodCards.length === 0 && (
                <p className={styles.dropHint}>Drop here or click</p>
              )}
            </div>
          </div>

          <div 
            className={`${styles.column} ${styles.riskyColumn} ${draggedOver === 'risky' ? styles.dragOver : ''} ${isActivityComplete ? styles.columnComplete : ''}`}
            onDragOver={(e) => handleDragOver(e, 'risky')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'risky')}
            onClick={() => !isActivityComplete && handleCategoryClick('risky')}
          >
            <div className={styles.columnHeader}>
              <XCircle size={20} />
              <span>{activity.categories.risky}</span>
            </div>
            <div className={styles.columnContent}>
              {riskyCards.map(({ card }) => (
                <div key={card.id} className={styles.sortedCard}>
                  <p>{card.text}</p>
                </div>
              ))}
              {!isActivityComplete && riskyCards.length === 0 && (
                <p className={styles.dropHint}>Drop here or click</p>
              )}
            </div>
          </div>
        </div>

        {isActivityComplete && (
          <div className={styles.completionFooter}>
            <p className={styles.completionMessage}>
              Great job! You correctly identified all AI practices. Click "Mark Complete & Continue" below to proceed.
            </p>
            <button className={styles.restartButton} onClick={handleRestart}>
              <RotateCcw size={16} />
              Restart Activity
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
