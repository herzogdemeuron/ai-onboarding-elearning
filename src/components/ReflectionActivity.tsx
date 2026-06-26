import { useState, useEffect } from 'react';
import { MessageSquare, AlertTriangle, Send, CheckCircle2, Edit3 } from 'lucide-react';
import { ReflectionActivity as ReflectionActivityType } from '../types';
import styles from './ReflectionActivity.module.css';

interface ReflectionActivityProps {
  activity: ReflectionActivityType;
  onComplete: () => void;
  isCompleted: boolean;
}

export function ReflectionActivity({ activity, onComplete, isCompleted }: ReflectionActivityProps) {
  const [reflection, setReflection] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showAllReflections, setShowAllReflections] = useState(false);

  const wordCount = reflection.trim().split(/\s+/).filter(word => word.length >= 2).length;
  const canSubmit = wordCount >= 20;

  useEffect(() => {
    if (isCompleted) {
      setIsSubmitted(true);
    }
  }, [isCompleted]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    setIsSubmitted(true);
    setIsEditing(false);
    onComplete();
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsSubmitted(false);
  };

  const visibleReflections = showAllReflections 
    ? activity.sharedReflections 
    : activity.sharedReflections.slice(0, 3);

  return (
    <div className={styles.container}>
      {/* Card 1: Combined Reflection Prompt + Writing Area */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Edit3 size={18} />
          <span>{isSubmitted && !isEditing ? 'Reflection Submitted' : 'Your Reflection'}</span>
          {isSubmitted && !isEditing && (
            <span className={styles.submittedBadge}>
              <CheckCircle2 size={14} />
              Submitted
            </span>
          )}
        </div>

        {isSubmitted && !isEditing ? (
          <div className={styles.confirmationContent}>
            <div className={styles.confirmationMessage}>
              <CheckCircle2 size={32} className={styles.confirmationIcon} />
              <p>{activity.confirmationMessage}</p>
            </div>
            <div className={styles.submittedReflection}>
              <p>"{reflection}"</p>
            </div>
            <button className={styles.editButton} onClick={handleEdit}>
              <Edit3 size={16} />
              Edit Reflection
            </button>
          </div>
        ) : (
          <div className={styles.writingContent}>
            <div className={styles.promptSection}>
              <h3 className={styles.promptQuestion}>{activity.prompt}</h3>
              <p className={styles.promptIntro}>Consider these questions as you reflect:</p>
              <ul className={styles.supportingQuestions}>
                {activity.supportingQuestions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
            <div className={styles.privacyNotice}>
              <AlertTriangle size={16} />
              <p>{activity.privacyNotice}</p>
            </div>
            <textarea
              className={styles.textarea}
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder={activity.placeholderText}
              rows={8}
            />
            <div className={styles.textareaFooter}>
              <span className={`${styles.wordCount} ${wordCount < 20 ? styles.wordCountLow : ''}`}>
                {wordCount} words {wordCount < 20 && '(minimum 20)'}
              </span>
              <button 
                className={styles.submitButton} 
                onClick={handleSubmit}
                disabled={!canSubmit}
              >
                <Send size={16} />
                Post Reflection
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Card 3: Shared Reflections */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <MessageSquare size={18} />
          <span>Shared Reflections</span>
          <span className={styles.reflectionCount}>
            {activity.sharedReflections.length} perspectives
          </span>
        </div>
        <div className={styles.threadContent}>
          {visibleReflections.map((item) => (
            <div key={item.id} className={styles.reflectionCard}>
              <div className={styles.reflectionAuthor}>
                <span className={styles.authorInitials}>{item.authorInitials}</span>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{item.authorName}</span>
                  <span className={styles.authorDepartment}>{item.authorDepartment}</span>
                  <span className={styles.authorDate}>{item.date}</span>
                </div>
              </div>
              <p className={styles.reflectionText}>"{item.content}"</p>
            </div>
          ))}
        </div>
        {activity.sharedReflections.length > 3 && (
          <button 
            className={styles.viewMoreButton}
            onClick={() => setShowAllReflections(!showAllReflections)}
          >
            {showAllReflections 
              ? 'Show Less' 
              : `View All ${activity.sharedReflections.length} Reflections`}
          </button>
        )}
      </div>
    </div>
  );
}
