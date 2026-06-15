import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ModuleContent } from './components/ModuleContent';
import { modules } from './data/modules';
import styles from './App.module.css';

function AppContent() {
  const { progress, setCurrentModule } = useProgress();

  const currentModule = modules.find(m => m.id === progress.currentModule);

  const handleModuleSelect = (moduleId: number) => {
    setCurrentModule(moduleId);
  };

  const handleNext = () => {
    if (progress.currentModule < modules.length) {
      setCurrentModule(progress.currentModule + 1);
    }
  };

  const handlePrevious = () => {
    if (progress.currentModule > 1) {
      setCurrentModule(progress.currentModule - 1);
    }
  };

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.contentWrapper}>
        <main className={styles.main}>
          {currentModule && (
            <ModuleContent
              module={currentModule}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirst={progress.currentModule === 1}
              isLast={progress.currentModule === modules.length}
            />
          )}
        </main>
        <Sidebar onModuleSelect={handleModuleSelect} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}

export default App;
