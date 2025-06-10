import Link from 'next/link';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>📚 About Our Library</h1>
        <p className={styles.subtitle}>
          A modern Library Management System to make your academic life easier.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>📖 Book Management</h3>
            <p>Effortlessly add, edit, and manage your book collection in one place.</p>
          </div>
          <div className={styles.card}>
            <h3>👤 User Activity</h3>
            <p>Track issued books, due dates, and user borrowing history seamlessly.</p>
          </div>
          <div className={styles.card}>
            <h3>📈 Analytics</h3>
            <p>Get smart insights into library usage patterns with AI-powered stats.</p>
          </div>
          <div className={styles.card}>
            <h3>🌐 Online Access</h3>
            <p>Access your library from anywhere with responsive web-based tools.</p>
          </div>
        </div>

        {/* Home Page Button */}
        <div className={styles.homeLinkWrapper}>
          <Link href="/">
            <button className={styles.homeButton}>🏠 Return to Home Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
