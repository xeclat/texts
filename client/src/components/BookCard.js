// BookCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log(books);
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Summary: {book.summary}</p>
          <p>Comments: {book.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
