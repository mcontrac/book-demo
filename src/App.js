import "./index.css";
import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-contacts";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
