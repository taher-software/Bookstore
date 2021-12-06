import React from 'react';

const BooksList = () => {
  const books = [];
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title}
          <button type="submit">Remove</button>
        </li>
      ))}
    </ul>
  );
};
export default BooksList;
