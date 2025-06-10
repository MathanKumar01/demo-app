import { useEffect, useState } from 'react';

export default function BookStats() {
  const [stats, setStats] = useState({ books: 0, issued: 0, students: 0 });

  useEffect(() => {
    // Simulating fetching from API or database
    const timer = setTimeout(() => {
      setStats({ books: 150, issued: 45, students: 80 });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <div className="card-container">
        <div className="card">
          <h3>Total Books</h3>
          <p>{stats.books}</p>
        </div>
        <div className="card">
          <h3>Issued Books</h3>
          <p>{stats.issued}</p>
        </div>
        <div className="card">
          <h3>Total Students</h3>
          <p>{stats.students}</p>
        </div>
      </div>
    </section>
  );
}
