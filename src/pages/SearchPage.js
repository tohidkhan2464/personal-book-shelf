import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookSearch from "../components/BookSearch";

const SearchPage = () => {
  const navigate = useNavigate();
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem("bookshelf")) || [];
  });

  const handleAddToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(newBookshelf));
  };

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden w-11/12 bg-slate-300 
    border-[2px] border-purple-400 rounded-xl mx-auto flex-col"
    >
      <h1 className="text-4xl font-bold my-10 underline">Search for Books</h1>

      <BookSearch onAddToBookshelf={handleAddToBookshelf} addedBooks={bookshelf} />
      <button
        className=" absolute top-28 left-20 py-2 px-8 transition-all duration-200 border-[2px] border-black hover:border-white
       bg-yellow-100 rounded-lg hover:bg-red-900 hover:text-white"
        onClick={() => navigate("/bookshelf")}
      >
        My Bookshelf
      </button>
    </div>
  );
};

export default SearchPage;
