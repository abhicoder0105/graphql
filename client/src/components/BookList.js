import React from "react";
import {  Link } from "react-router-dom"
import { useBookList } from "../hooks/useBookList";

const BookList = () => {

  const { error, data, loading} = useBookList();

  if(loading) {
    return "Please wait...."
  };

  if(error){
    return error;
  }

  let booklist;
  if(!loading || !error){
    console.log(data);
    booklist = data.books?.map((book) => <li key={book.id}> <Link to={`/${book.id}`}> {book.name} and  {book.genre} </Link> </li>)
    return booklist;
   }  

  return (
    <div>
      <ul id="#book-list">
       {loading? "Please wait its loading": {booklist} }
      </ul>
    </div>
  );
};

export default BookList;
