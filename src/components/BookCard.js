import React from "react";

const BookCard = ({ book, onAddToBookshelf, isAdded }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 justify-center border-[2px] bg-green-300 bg-opacity-70
     border-black rounded-lg py-8 px-4 max-w-[300px] w-full">
      <h3 className="text-lg font-semibold text-center">{book.title}</h3>
      <p>Edition Count: {book.edition_count}</p>
      {!isAdded && (
        <button
          className="py-2 px-8 transition-all duration-200 border-[2px] border-black hover:border-white
       bg-yellow-100 rounded-lg hover:bg-red-900 hover:text-white"
          onClick={() => onAddToBookshelf(book)}
        >
          Add to Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;
