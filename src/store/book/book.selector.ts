import { createSelector } from "reselect";

export const getBooksState = (state: any) => state.books;
export const getIsLoadingBook = createSelector(getBooksState, (booksState) => {
  return booksState.isLoading;
});
export const getIsErrorBook = createSelector(getBooksState, (booksState) => {
  return booksState.error;
});

export const getBooksData = createSelector(getBooksState, (booksState) => {
  return booksState.books;
});
export const getBooksDataMap = createSelector(getBooksData, (booksData) => {
  let arr: {
    bookId: string;
    title: string;
    thumbnail: string;
    authors: string;
    averageRating: number;
    ratingsCount: number;
  }[] = [];
  booksData.forEach((data: any) => {
    if (data?.volumeInfo?.imageLinks?.thumbnail && data.volumeInfo.authors) {
      arr.push({
        bookId: data.id,
        title: data.volumeInfo.title,
        thumbnail: data.volumeInfo.imageLinks.thumbnail,
        authors: data.volumeInfo.authors.join(", "),
        averageRating: data.volumeInfo.averageRating ?? 0,
        ratingsCount: data.volumeInfo.ratingsCount,
      });
    }
  });
  return arr;
});
