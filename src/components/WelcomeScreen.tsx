import { Clock, CheckCircle2 } from 'lucide-react';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onStart: () => void;
  onPreview: () => void;
}

const learningOutcomes = [
  'Understand core AI concepts',
  'Recognize practical workplace uses',
  'Write better prompts',
  'Use AI safely and responsibly'
];

export function WelcomeScreen({ onStart, onPreview }: WelcomeScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.meta}>
        <Clock size={16} className={styles.clockIcon} />
        <span>15–20 min</span>
      </div>

      <h1 className={styles.title}>AI for Professional Work</h1>

      <p className={styles.description}>
        A 15–20 minute module covering the basics of AI, practical use cases,
        prompting, limitations, confidentiality, and responsible use.
      </p>

      <p className={styles.audience}>
        This module is designed for professional users who need a practical, trustworthy
        introduction to AI in day-to-day work.
      </p>

      <section className={styles.outcomes}>
        <h2 className={styles.outcomesTitle}>Learning Outcomes</h2>
        <div className={styles.outcomesList}>
          {learningOutcomes.map((outcome, index) => (
            <div key={index} className={styles.outcomeItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.actions}>
        <button className={styles.primaryButton} onClick={onStart}>
          Start module
        </button>
        <button className={styles.secondaryButton} onClick={onPreview}>
          Preview topics
        </button>
      </div>
    </div>
  );
}
