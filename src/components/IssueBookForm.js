import { useState } from 'react';

export default function IssueBookForm() {
  const [studentId, setStudentId] = useState('');
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId && bookId) {
      setMessage(`Book with ID ${bookId} issued to student ${studentId}.`);
      setStudentId('');
      setBookId('');
    } else {
      setMessage('Please enter both student ID and book ID.');
    }
  };

  return (
    <section className="issue-form">
      <h2>Issue Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter student ID"
          />
        </label>
        <label>
          Book ID:
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            placeholder="Enter book ID"
          />
        </label>
        <button type="submit">Issue</button>
      </form>
      {message && <p className="note">{message}</p>}
    </section>
  );
}
