const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const STARTED_BOOK = 'bookStore/books/STARTED_BOOK';
const MANAGE_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';

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
        category: 'Fiction',
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

const consumeApi = async () => {
  const res = await (async () => {
    const url = `${urlApi}/apps/${appIdentifier}/books`;
    const data = await (fetch(url));
    return data.json();
  });
  return res;
};
const initialState = {
  books: consumeApi(),
};
const booksReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default booksReducer;
