import Link from 'next/link';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>📬 Contact Us</h1>
        <p className={styles.subtitle}>
          Have questions or feedback? Reach out and let’s connect!
        </p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message..." rows="5" required />
          </div>

          <button type="submit" className={styles.button}>Send Message</button>
        </form>

        <div className={styles.homeLinkWrapper}>
          <Link href="/">
            <button className={styles.homeButton}>🏠 Return to Home Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
