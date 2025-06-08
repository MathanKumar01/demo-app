import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Library Management System</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Issue Book</a></li>
            <li><a href="#">Return Book</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="dashboard">
          <h2>Dashboard</h2>
          <div className="card-container">
            <div className="card">
              <h3>Total Books</h3>
              <p>150</p>
            </div>
            <div className="card">
              <h3>Issued Books</h3>
              <p>45</p>
            </div>
            <div className="card">
              <h3>Total Students</h3>
              <p>80</p>
            </div>
          </div>
        </section>

        <section className="issue-form">
          <h2>Issue Book</h2>
          <form>
            <label>
              Student ID:
              <input type="text" placeholder="Enter student ID" />
            </label>
            <label>
              Book ID:
              <input type="text" placeholder="Enter book ID" />
            </label>
            <button type="submit">Issue</button>
          </form>
        </section>

        <section className="recommendation">
          <h2>AI Book Recommendation</h2>
          <form>
            <label>
              Enter Favorite Genre or Book:
              <input type="text" placeholder="e.g. Mystery, Sci-Fi, Harry Potter" />
            </label>
            <button type="submit">Get Recommendation</button>
          </form>
          <p className="note">* AI integration coming soon. This is a UI demo only.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Library System</p>
      </footer>
    </div>
  );
}
