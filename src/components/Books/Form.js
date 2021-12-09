import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = e.target.parentNode.querySelector('input').value;
    const authors = ['Suzanne Collins', 'Frank Herbert'];
    const newBook = {
      id,
      title,
      author: authors[Math.floor(Math.random() * 2)],
    };
    dispatch(addNewBook(newBook));
  };
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <div>
        <input type="text" placeholder="Book title" />
        <select defaultValue="Category">
          <option disabled selected>Category</option>
          <option>Economy</option>
          <option>Action</option>
          <option>Science fiction</option>
        </select>
        <button type="submit" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
      </div>
    </form>
  );
};
export default AddBook;
