import React from "react";
import { useSelector } from "react-redux";
const BooksList = () => {
  const books = useSelector(state => state.books);
  return(
    <ul>
        {books.map(book =>{
            <li key= {book.id}> 
              {book.title}
              <button>Remove</button>
            </li>
        })}
    </ul>
  );
}
export default BooksList;