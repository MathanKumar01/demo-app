import { useState } from 'react';
import Link from 'next/link';
import BookStats from '../components/BookStats';
import IssueBookForm from '../components/IssueBookForm';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const getRecommendation = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });

      const data = await res.json();
      setResult(data.recommendation || '❗ No recommendation found. Try entering a genre or book title.');
    } catch (error) {
      setResult('❌ Error: ' + error.message);
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#34495e', color: '#fff', padding: '20px' }}>
        <h1 style={{ marginBottom: '10px' }}>📚 Library Management System</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', padding: 0 }}>
            <li><Link href="/">🏠 Home</Link></li>
            <li><Link href="/about">ℹ️ About</Link></li>
            <li><Link href="/contact">📞 Contact</Link></li>
            <li><a href="#">📘 Books</a></li>
            <li><a href="#">🎓 Students</a></li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: '30px' }}>
        {/* 🔍 Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px 0 30px 10px',
          gap: '10px'
        }}>
          <span style={{ fontSize: '24px', color: '#2c3e50' }}>🔍</span>
          <input
            type="text"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '350px',
              padding: '10px 15px',
              fontSize: '16px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>

        <BookStats />
        <IssueBookForm />

        {/* 🤖 AI Book Recommendation */}
        <section style={{
          marginTop: '40px',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>🤖 Get AI Book Recommendation</h2>
          <form
            onSubmit={getRecommendation}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <input
              type="text"
              placeholder="Ask AI: genre or book name..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                width: '90%',
                maxWidth: '600px',
                padding: '14px 20px',
                fontSize: '16px',
                borderRadius: '30px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                outline: 'none',
                marginBottom: '20px',
              }}
            />
            <button type="submit" style={{
              padding: '10px 24px',
              backgroundColor: '#8e44ad',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              Get AI Suggestion
            </button>
          </form>

          {result && (
            <div style={{
              marginTop: '30px',
              width: '100%',
              maxWidth: '700px',
              backgroundColor: '#f9f9f9',
              borderLeft: '5px solid #8e44ad',
              padding: '20px',
              borderRadius: '8px',
              fontSize: '16px',
              lineHeight: '1.6',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              whiteSpace: 'pre-wrap'
            }}>
              <strong>📘 AI Response:</strong><br />
              {result}
            </div>
          )}
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '15px',
        backgroundColor: '#bdc3c7',
        marginTop: '50px'
      }}>
        &copy; 2025 Library System
      </footer>
    </div>
  );
}
