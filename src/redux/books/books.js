const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const STARTED_BOOK = 'bookStore/books/STARTED_BOOK';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';

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

const manageBookStarted = () =>({
  type: STARTED_BOOK,
})

const addBookFailed = error =>({
  type: ADD_BOOK_FAILURE,
  payload: {
    error
  }
})
const addBookToApi = (data)=> {
  const url = urlApi + '/apps/' + appIdentifier + '/books';
  return fetch(
    url,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
}

export const addNewBook = (payload) => {
  return dispatch => {
    dispatch(manageBookStarted());
    addBookToApi(payload)
    .then(res => {
      dispatch(addBook(payload));
    })
    .catch(err =>{
      dispatch(addBookFailed(err.message));
    })

  }
}

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
