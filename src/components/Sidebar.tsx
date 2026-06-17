import { Clock, Check } from 'lucide-react';
import { modules } from '../data/modules';
import { useProgress } from '../context/ProgressContext';
import styles from './Sidebar.module.css';

interface SidebarProps {
  onModuleSelect: (moduleId: number) => void;
  hideProgress?: boolean;
  allInactive?: boolean;
}

export function Sidebar({ onModuleSelect, hideProgress = false, allInactive = false }: SidebarProps) {
  const { progress, isModuleCompleted, isModuleAccessible } = useProgress();

  const currentModuleName = modules.find(m => m.id === progress.currentModule)?.shortTitle || 'Welcome';
  const progressPercentage = (progress.currentModule / modules.length) * 100;

  return (
    <aside className={styles.sidebar}>
      <section className={styles.moduleOutline}>
        <h2 className={styles.sectionTitle}>Module Outline</h2>
        <nav className={styles.moduleList}>
          {modules.map((module) => {
            const isCompleted = allInactive ? false : isModuleCompleted(module.id);
            const isAccessible = allInactive ? false : isModuleAccessible(module.id);
            const isCurrent = allInactive ? false : progress.currentModule === module.id;

            return (
              <button
                key={module.id}
                className={`${styles.moduleItem} ${isCurrent ? styles.current : ''} ${!isAccessible ? styles.locked : ''} ${isCompleted ? styles.completed : ''}`}
                onClick={() => isAccessible && onModuleSelect(module.id)}
                disabled={!isAccessible || allInactive}
              >
                <div className={styles.moduleInfo}>
                  <span className={`${styles.moduleNumber} ${isCompleted ? styles.checkmark : ''}`}>
                    {isCompleted ? <Check size={12} /> : module.id}
                  </span>
                  <span className={styles.moduleTitle}>{module.shortTitle}</span>
                </div>
                <div className={styles.moduleDuration}>
                  <Clock size={15} className={styles.clockIcon} />
                  <span>{module.duration}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </section>

      {!hideProgress && (
        <section className={styles.progressSection}>
          <h2 className={styles.sectionTitle}>Progress</h2>
          <div className={styles.progressTrack}>
            <div className={styles.progressHeader}>
              <span className={styles.progressLabel}>{currentModuleName}</span>
              <span className={styles.progressCount}>
                {progress.currentModule}/{modules.length}
              </span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </section>
      )}
    </aside>
  );
}
