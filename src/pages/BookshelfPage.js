import React from "react";
import Bookshelf from "../components/Bookshelf";
import { useNavigate } from "react-router-dom";

const BookshelfPage = () => {
  const navigate = useNavigate();
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden w-11/12 bg-slate-300 
        border-[2px] border-purple-400 rounded-xl mx-auto flex-col"
    >
      <h1 className="text-4xl font-bold my-10 underline">My Bookshelf</h1>
      <Bookshelf bookshelf={bookshelf} />
      <button
        className=" absolute top-20 left-20 py-2 px-8 transition-all duration-200 border-[2px] border-black hover:border-white
       bg-yellow-100 rounded-lg hover:bg-red-900 hover:text-white"
        onClick={() => navigate(-1)}
      >
        Search Page
      </button>
    </div>
  );
};

export default BookshelfPage;
