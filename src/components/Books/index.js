import React from "react";
import BooksList from "./BooksList";
import AddBook from "./Form";

const Books = () => {
  return(
    <div>
      <BooksList />
      <AddBook />
    </div>
  );
}

export default Books;