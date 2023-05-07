import "./index.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    console.log(response);
    // const updatedBooks = [
    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title },
    // ];
    // setBooks(updatedBooks);
  };

  const updateBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
