import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const authors = ['Suzanne Collins', 'Frank Herbert'];
    const id = uuidv4();
    let target = e.target.parentNode;
    if (e.target.className === 'btn-title') target = e.target.parentNode.parentNode;
    const title = target.querySelector('input').value;
    target.querySelector('input').value = '';
    const category = target.querySelector('select').value;
    target.querySelector('select').value = '';
    const newBook = {
      id,
      title,
      author: authors[Math.floor(Math.random() * 2)],
      category,
    };
    dispatch(addNewBook(newBook));
  };
  return (
    <form className="form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div className="form-icone">
        <input className="input-book" type="text" placeholder="Book title" />
        <select className="category-input">
          <option disabled selected hidden>Category</option>
          <option>Economy</option>
          <option>Action</option>
          <option>Science fiction</option>
        </select>
        <button className="btn-book" type="submit" onClick={(e) => submitBookToStore(e)}><i className="btn-title">ADD BOOK</i></button>
      </div>
    </form>
  );
};
export default AddBook;
