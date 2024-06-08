import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookSearch = ({ onAddToBookshelf, addedBooks }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 2) {
      setLoading(true);
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      setResults(response.data.docs);
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col mt-20 items-center justify-center w-full gap-y-10 bg-blue-200">
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={handleSearch}
        className="w-[300px] absolute top-28 right-20 border-[2px] border-black bg-blue-200 text-black p-2 rounded-lg"
      />
      <div className="w-full grid grid-cols-4 gap-8 p-8 ">
        {!loading ? (
          results?.length < 1 ? (
            <div className="w-full col-span-full h-full text-center text-2xl font-semibold">
              Type something in the Search bar for results
            </div>
          ) : (
            results.map((book) => (
              <BookCard
                key={book.key}
                book={{ title: book.title, edition_count: book.edition_count }}
                onAddToBookshelf={onAddToBookshelf}
                isAdded={addedBooks.every((b) => b.key === book.key)}
              />
            ))
          )
        ) : (
          <div className="w-full col-span-full h-full text-center text-xl font-semibold">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
