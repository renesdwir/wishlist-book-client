import { useEffect } from "react";
import CardList from "../../components/card-list/card-list.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../../store/wishlist/wishlist.action";
import {
  getIsLoadingWishlist,
  getWishlistsData,
} from "../../store/wishlist/wishlist.selector";
import Spinner from "../../components/spinner/spinner.component";

const WishlistBook = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishlistsData);
  const isLoading = useSelector(getIsLoadingWishlist);
  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CardList title="My Wishlist Book" books={wishlist} />
      )}
    </>
  );
};

export default WishlistBook;
