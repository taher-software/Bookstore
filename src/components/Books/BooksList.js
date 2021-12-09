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
  let i = 0;
  return (
    <ul className="books" style={{ gridTemplateRows: `repeat(${books.length},1fr)` }}>
      {books.map((book) => {
        const {
          id, title, author, category,
        } = book;
        i += 1;
        return (
          <li key={id} className="book-card" style={{ gridRow: `${i}/span 1` }}>
            <div className="book-inf">
              <p className="category">{category}</p>
              <h2>{title}</h2>
              <p className="author">{author}</p>
              <div className="user-btns">
                <button className="edit-button" type="submit">Comments</button>
                <button className="edit-button" type="submit" onClick={() => handleRemove(id)}>Remove</button>
                <button className="edit-button" type="submit">Edit</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default BooksList;
