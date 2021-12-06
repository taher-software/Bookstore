import React from "react";
const AddBook = () => {
  return (
    <form>
        <h2>ADD NEW BOOK</h2>
        <div>
          <input type='text' placeholder='Book title'/>
          <input type='select' placeholder='Category'>

          </input>
          <button>ADD BOOK</button>
        </div>
    </form>
  );
}

export default AddBook;