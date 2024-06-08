import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookshelfPage from "./pages/BookshelfPage";

const App = () => {
  return (
    <div className="max-h-screen h-full w-screen py-10">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </div>
  );
};

export default App;
