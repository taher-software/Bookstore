import React from 'react';

const AddBook = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <div>
      <input type="text" placeholder="Book title" />
      <select>
        <option disabled selected> Category </option>
        <option>Economy</option>
        <option>Action</option>
        <option>Science fiction</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
);

export default AddBook;
