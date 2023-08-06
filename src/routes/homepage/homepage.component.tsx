import { useEffect, useRef, useState } from "react";
import CardList from "../../components/card-list/card-list.component";
import { Button, HompageContainer, Input } from "./homepage.styled";
import { useSelector } from "react-redux";
import {
  getBooksDataMap,
  getIsLoadingBook,
} from "../../store/book/book.selector";
import { fetchBooks } from "../../store/book/book.action";
import Spinner from "../../components/spinner/spinner.component";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../hooks/hooks";

const Homepage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const books = useSelector(getBooksDataMap);
  const isLoading = useSelector(getIsLoadingBook);
  useEffect(() => {
    dispatch(fetchBooks("fullstack engineer"));
  }, []);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!inputRef?.current?.value) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in the search box !",
      });
    }
    if (searchInput !== inputRef?.current?.value) {
      dispatch(fetchBooks(inputRef?.current?.value));
      setSearchInput(inputRef?.current?.value ?? "");
    }
  };

  return (
    <HompageContainer>
      <div>
        <p style={{ marginBottom: "8px" }}>Find any book you want !</p>
        <form onSubmit={handleSubmit}>
          <Input ref={inputRef} />
          <Button>Search</Button>
        </form>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <CardList
          title={`Search results from "${searchInput}"`}
          books={books}
        />
      )}
    </HompageContainer>
  );
};

export default Homepage;
