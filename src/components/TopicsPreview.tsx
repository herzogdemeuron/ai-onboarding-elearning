import { ArrowLeft, BookOpen, Lock } from 'lucide-react';
import { modules } from '../data/modules';
import { useProgress } from '../context/ProgressContext';
import styles from './TopicsPreview.module.css';

interface TopicsPreviewProps {
  onBack: () => void;
  onSelectModule: (moduleId: number) => void;
}

export function TopicsPreview({ onBack, onSelectModule }: TopicsPreviewProps) {
  const { isModuleAccessible, isModuleCompleted } = useProgress();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onBack}>
        <ArrowLeft size={18} />
        Back to Welcome
      </button>

      <h1 className={styles.title}>Module Topics</h1>
      <p className={styles.description}>
        Preview what you'll learn in each section of this AI onboarding module.
      </p>

      <div className={styles.topicsList}>
        {modules.map((module) => {
          const isAccessible = isModuleAccessible(module.id);
          const isCompleted = isModuleCompleted(module.id);

          return (
            <button
              key={module.id}
              className={`${styles.topicCard} ${!isAccessible ? styles.locked : ''} ${isCompleted ? styles.completed : ''}`}
              onClick={() => isAccessible && onSelectModule(module.id)}
              disabled={!isAccessible}
            >
              <div className={styles.topicHeader}>
                <span className={styles.topicNumber}>{module.id}</span>
                {isAccessible ? (
                  <BookOpen size={18} className={styles.topicIcon} />
                ) : (
                  <Lock size={18} className={styles.lockIcon} />
                )}
              </div>
              <h2 className={styles.topicTitle}>{module.title}</h2>
              <p className={styles.topicDescription}>
                {module.content.description}
              </p>
              <div className={styles.topicSections}>
                {module.content.sections.slice(0, 2).map((section, index) => (
                  <span key={index} className={styles.sectionTag}>
                    {section.title}
                  </span>
                ))}
                {module.content.sections.length > 2 && (
                  <span className={styles.moreTag}>
                    +{module.content.sections.length - 2} more
                  </span>
                )}
              </div>
              {!isAccessible && (
                <div className={styles.lockedOverlay}>
                  <Lock size={24} />
                  <span>Complete previous modules to unlock</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
