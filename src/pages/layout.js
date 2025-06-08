import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Library Management System</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Issue Book</a></li>
            <li><a href="#">Return Book</a></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2025 Library System</p>
      </footer>
    </>
  );
}
