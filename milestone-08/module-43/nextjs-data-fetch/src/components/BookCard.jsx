import Link from "next/link";
import React from "react";

const BookCard = ({book}) => {
    const {title, author, price, category, description} = book;
  return (
    <div className="card border bg-base-100 card-md shadow-sm ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="font-semibold"><span className="italic">Author:</span> {author}</h3>
        <p>{category}</p>
        <div className="justify-between card-actions">
          <button className="btn btn-success">{price}</button>
          <button className="btn btn-primary">{category}</button>
        </div>
        <Link href={`/books/${book.id}`}><button className="btn btn-error">Book Details</button></Link>
      </div>
    </div>
  );
};

export default BookCard;
