import React from 'react';
import { useSelector } from 'react-redux';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <button type="submit">Remove</button>
        </li>
      ))}
    </ul>
  );
};
export default BooksList;
