import { combineReducers } from "redux";
import { booksReducer } from "./book/book.reducer";
import { wishlistsReducer } from "./wishlist/wishlist.reducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  wishlists: wishlistsReducer,
});
