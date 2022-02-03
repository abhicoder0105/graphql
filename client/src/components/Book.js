import React from "react";
import useBook from "../hooks/useBook";
import { useParams } from "react-router";

const Book = () => {
  const { id } = useParams();

  const { data, error, loading } = useBook(id);

  if (loading) {
    return "Please wait....";
  }

  if (error) {
    return error;
  }

  console.log(data);

  return (
    <div>
      <h1> {data.book.name}</h1>
      <p>{data.book.genre}</p>
    </div>
  );
};

export default Book;
