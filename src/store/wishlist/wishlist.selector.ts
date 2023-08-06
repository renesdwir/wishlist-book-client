import { createSelector } from "reselect";

export const getWishlistState = (state: any) => state.wishlists;
export const getIsLoadingWishlist = createSelector(
  getWishlistState,
  (wishlistsState) => {
    return wishlistsState.isLoading;
  }
);
export const getIsErrorWishlist = createSelector(
  getWishlistState,
  (wishlistsState) => {
    return wishlistsState.error;
  }
);

export const getWishlistsData = createSelector(
  getWishlistState,
  (wishlistsState) => {
    return wishlistsState.wishlist;
  }
);
