import Swal from "sweetalert2";
import { PublicAPI } from "../../utils/api";
import { BOOK_ACTION_TYPES } from "./book.types";

export const fetchBooks = (searchKeyword: string | undefined) => {
  return async (dispatch: any) => {
    dispatch({ type: BOOK_ACTION_TYPES.FETCH_BOOK_START });
    try {
      const response = await PublicAPI.get("", {
        params: {
          q: searchKeyword ?? "a",
          maxResults: 20,
        },
      });
      dispatch({
        type: BOOK_ACTION_TYPES.FETCH_BOOK_SUCCESS,
        payload: response.data.items,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: "Something went wrong <br> Please contact developer!",
      });
      dispatch({ type: BOOK_ACTION_TYPES.FETCH_BOOK_FAILED, payload: error });
    }
  };
};
