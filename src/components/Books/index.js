import React from 'react';
import BooksList from './BooksList';
import AddBook from './Form';

const Books = () => (
  <div className="books-data">
    <BooksList />
    <hr />
    <AddBook />
  </div>
);

export default Books;
