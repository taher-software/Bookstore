const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const STARTED_BOOK = 'bookStore/books/STARTED_BOOK';
const MANAGE_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';
const DISPLAY_BOOK = 'bookStore/books/DISPLAY_BOOK';

const appIdentifier = 'oFzStVgFLC3mbAjB7OrJ';
const urlApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const manageBookStarted = () => ({
  type: STARTED_BOOK,
});

const manageBookFailed = (error) => ({
  type: MANAGE_BOOK_FAILURE,
  payload: {
    error,
  },
});

const displayBook = (payload) => ({
  type: DISPLAY_BOOK,
  payload,
});

const addBookToApi = (data) => {
  const url = `${urlApi}/apps/${appIdentifier}/books`;
  return fetch(
    url,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: data.id,
        title: data.title,
        category: data.category,
      }),
    },
  );
};

const deleteBookFromApi = (id) => {
  const url = `${urlApi}/apps/${appIdentifier}/books/${id}`;
  return fetch(
    url,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    },
  );
};
const consumeApi = () => {
  const url = `${urlApi}/apps/${appIdentifier}/books`;
  return (fetch(url));
};

const processingData = (data) => {
  const books = [];
  const authors = ['Suzanne Collins', 'Frank Herbert'];
  Array.from(Object.keys(data)).forEach((item) => {
    const newBook = {};
    const bookInf = data[item][0];
    newBook.id = item;
    newBook.title = bookInf.title;
    newBook.author = authors[Math.floor(Math.random() * 2)];
    newBook.category = bookInf.category;
    books.push(newBook);
  });
  return books;
};
export const addNewBook = (payload) => (dispatch) => {
  dispatch(manageBookStarted());
  addBookToApi(payload)
    .then(() => {
      dispatch(addBook(payload));
    })
    .catch((err) => {
      dispatch(manageBookFailed(err.message));
    });
};

export const removeExistBook = (id) => (dispatch) => {
  dispatch(manageBookStarted());
  deleteBookFromApi(id)
    .then(() => {
      dispatch(removeBook(id));
    })
    .catch((err) => {
      dispatch(manageBookFailed(err.message));
    });
};

export const loadAndDisplayBooks = () => (dispatch) => {
  dispatch(manageBookStarted());
  consumeApi()
    .then((res) => res.json())
    .then((result) => dispatch(displayBook(processingData(result))))
    .catch((err) => dispatch(manageBookFailed(err.message)));
};

const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case STARTED_BOOK:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload),
        error: null,
        loading: false,
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
        error: null,
        loading: false,
      };
    case MANAGE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case DISPLAY_BOOK:
      return {
        ...state,
        books: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default booksReducer;
