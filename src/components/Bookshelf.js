import React from "react";

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="w-full grid grid-cols-4  gap-8 p-8 ">
      {bookshelf.map((book, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-y-2 justify-center bg-green-300 bg-opacity-70
                 border-[2px] border-black rounded-lg py-8 px-4 max-w-[300px] w-full"
        >
          <h3 className="text-lg font-semibold text-center">{book.title}</h3>
          <p>Edition Count: {book.edition_count}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
