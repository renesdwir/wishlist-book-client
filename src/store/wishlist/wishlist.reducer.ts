import { WISHLIST_ACTION_TYPES } from "./wishlist.types";

const INITIAL_STATE = {
  wishlist: [],
  isLoading: false,
  error: null,
};

export const wishlistsReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case WISHLIST_ACTION_TYPES.WISHLIST_START:
      return { ...state, isLoading: true };
    case WISHLIST_ACTION_TYPES.FETCH_WISHLIST_SUCCESS:
      return { ...state, wishlist: payload, isLoading: false };
    case WISHLIST_ACTION_TYPES.DELETE_WISHLIST_SUCCESS:
      return { ...state, wishlist: payload, isLoading: false };
    case WISHLIST_ACTION_TYPES.WISHLIST_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
