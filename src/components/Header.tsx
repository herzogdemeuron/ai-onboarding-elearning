import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>H&dM</div>
      <div className={styles.title}>AI Learning Journey</div>
      <div className={styles.menuButton}>
        <img 
          src="/images/dp-logo.png" 
          alt="Logo" 
          className={styles.logoIcon}
        />
      </div>
    </header>
  );
}
