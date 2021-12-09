import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExistBook, loadAndDisplayBooks } from '../../redux/books/books';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeExistBook(id));
  };
  useEffect(() => dispatch(loadAndDisplayBooks()), []);
  return (
    <ul>
      {books.map((book) => {
        const { id, title, author } = book;
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{author}</p>
            <button type="submit" onClick={() => handleRemove(id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
};
export default BooksList;
