import { ArrowRight } from 'lucide-react';
import styles from './WelcomePage.module.css';

interface WelcomePageProps {
  onStart: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  const learningOutcomes = [
    {
      title: 'Understand AI Basics',
      description: 'Learn how AI works, its capabilities, and its limitations'
    },
    {
      title: 'Use AI Responsibly',
      description: 'Apply best practices for safe and effective AI use'
    },
    {
      title: 'Know the Tools',
      description: 'Discover the approved AI tools available at H&dM'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Welcome to the AI Learning Journey</h1>
          <p className={styles.description}>
            A 25-30 minute introduction to responsible AI use at Herzog & de Meuron. 
            Learn the fundamentals, explore our tools, and understand how to use AI 
            effectively in your daily work.
          </p>
        </div>

        <div className={styles.outcomesSection}>
          <h2 className={styles.outcomesTitle}>Learning Outcomes</h2>
          <div className={styles.outcomesGrid}>
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className={styles.outcomeCard}>
                <h3 className={styles.outcomeCardTitle}>{outcome.title}</h3>
                <p className={styles.outcomeCardDescription}>{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div />
        <button className={styles.startButton} onClick={onStart}>
          Start Module
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
