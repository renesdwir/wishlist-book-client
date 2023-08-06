import Swal from "sweetalert2";
import { BaseAPI } from "../../utils/api";
import { WISHLIST_ACTION_TYPES } from "./wishlist.types";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { wishlistsReducer } from "./wishlist.reducer";

export const fetchWishlist = () => {
  return async (dispatch: any) => {
    dispatch({ type: WISHLIST_ACTION_TYPES.WISHLIST_START });
    try {
      const response = await BaseAPI.get("/book/getWishlistBook");
      dispatch({
        type: WISHLIST_ACTION_TYPES.FETCH_WISHLIST_SUCCESS,
        payload: response.data.data,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: "Something went wrong <br> Please contact developer!",
      });
      dispatch({ type: WISHLIST_ACTION_TYPES.WISHLIST_FAILED, payload: error });
    }
  };
};

export const addWishlist = (
  payload: any
): ThunkAction<void, typeof wishlistsReducer, unknown, AnyAction> => {
  return async () => {
    try {
      const response = await BaseAPI.post("/book/addWishlistBook", payload);
      if (response.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully added to wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: "Something went wrong <br> Please contact developer!",
        });
      }
    }
  };
};

export const deleteFromWishlist = (bookId: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const confirmationResult = await Swal.fire({
        title: "Warning",
        text: "Are you sure you want to delete this wishlist?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (confirmationResult.isConfirmed) {
        const response = await BaseAPI.delete(
          `/book/deleteWishlistBook/${bookId}`
        );
        if (response.status === 200) {
          let currentWishlist = getState().wishlists.wishlist;
          let newWishlist = currentWishlist.filter(
            (wishlist: any) => wishlist.bookId !== bookId
          );
          dispatch({
            type: WISHLIST_ACTION_TYPES.FETCH_WISHLIST_SUCCESS,
            payload: newWishlist,
          });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: "Something went wrong <br> Please contact developer!",
        });
      }
    }
  };
};
