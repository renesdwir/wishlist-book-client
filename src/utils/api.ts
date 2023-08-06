import axios from "axios";
export const PublicAPI = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes", // /volumes?q=eloquent%20javascript&orderBy=relevance&maxResults=10
});
export const BaseAPI = axios.create({
  baseURL: "https://wishlist-book-server-production.up.railway.app/", // /book/getWishlistBook
});
