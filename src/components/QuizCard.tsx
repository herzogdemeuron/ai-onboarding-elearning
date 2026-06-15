import { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../types';
import styles from './QuizCard.module.css';

interface QuizCardProps {
  questions: QuizQuestion[];
  onComplete: () => void;
  isCompleted: boolean;
}

export function QuizCard({ questions, onComplete, isCompleted }: QuizCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasPassed, setHasPassed] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);

  // Reset quiz state when questions change (new module)
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setSelectedAnswer(null);
    setHasPassed(false);
    setIsRetaking(false);
  }, [questions]);

  const currentQuestion = questions[currentQuestionIndex];
  const correctCount = answers.filter((ans, idx) => ans === questions[idx].correctAnswer).length;
  const wrongCount = questions.length - correctCount;
  const allCorrect = correctCount === questions.length && answers.every(a => a !== null);

  useEffect(() => {
    if (showResults && allCorrect && !hasPassed) {
      setHasPassed(true);
      onComplete();
    }
  }, [showResults, allCorrect, hasPassed, onComplete]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setSelectedAnswer(null);
    setHasPassed(false);
    setIsRetaking(true);
  };

  if (isCompleted && !showResults && !isRetaking) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <HelpCircle size={18} />
          <span>Knowledge Check</span>
          <span className={styles.completedBadge}>
            <CheckCircle2 size={14} />
            Completed
          </span>
        </div>
        <div className={styles.completedMessage}>
          <CheckCircle2 size={32} className={styles.successIcon} />
          <p>You've already completed this quiz!</p>
          <button className={styles.retryButton} onClick={handleRetry}>
            <RotateCcw size={16} />
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <HelpCircle size={18} />
          <span>Knowledge Check</span>
        </div>
        <div className={styles.results}>
          <div className={`${styles.scoreCircle} ${allCorrect ? styles.scoreSuccess : styles.scoreFail}`}>
            <span className={styles.scoreNumber}>{correctCount}</span>
            <span className={styles.scoreTotal}>/{questions.length}</span>
          </div>
          <h3 className={styles.resultsTitle}>
            {allCorrect ? 'Perfect Score!' : 'Almost There!'}
          </h3>
          
          <div className={styles.resultsSummary}>
            <div className={styles.summaryItem}>
              <CheckCircle2 size={20} className={styles.correctIcon} />
              <span className={styles.summaryCount}>{correctCount}</span>
              <span className={styles.summaryLabel}>Correct</span>
            </div>
            <div className={styles.summaryItem}>
              <XCircle size={20} className={styles.incorrectIcon} />
              <span className={styles.summaryCount}>{wrongCount}</span>
              <span className={styles.summaryLabel}>Incorrect</span>
            </div>
          </div>

          <p className={styles.resultsMessage}>
            {allCorrect 
              ? 'Great job! You answered all questions correctly. Click "Mark Complete & Continue" below to proceed.'
              : `You need to answer all questions correctly to continue. Review the material and try again.`}
          </p>

          {!allCorrect && (
            <button className={styles.retryButton} onClick={handleRetry}>
              <RotateCcw size={16} />
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HelpCircle size={18} />
        <span>Knowledge Check</span>
        <span className={styles.progress}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
        />
      </div>

      <p className={styles.question}>{currentQuestion.question}</p>

      <div className={styles.options}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${selectedAnswer === index ? styles.selected : ''}`}
            onClick={() => handleAnswerSelect(index)}
          >
            <span className={styles.optionLetter}>{String.fromCharCode(65 + index)}</span>
            {option}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <button 
          className={styles.nextButton} 
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Quiz'}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
