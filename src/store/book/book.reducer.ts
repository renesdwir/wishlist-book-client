import { BOOK_ACTION_TYPES } from "./book.types";
const INITIAL_STATE = {
  books: [],
  isLoading: false,
  error: null,
};

export const booksReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_ACTION_TYPES.FETCH_BOOK_START:
      return { ...state, isLoading: true };
    case BOOK_ACTION_TYPES.FETCH_BOOK_SUCCESS:
      return { ...state, books: payload, isLoading: false };
    case BOOK_ACTION_TYPES.FETCH_BOOK_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
