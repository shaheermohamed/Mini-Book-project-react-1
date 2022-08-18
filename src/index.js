import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";
// setup variable


const BookList = () => {
  return (
    <section className="BookList">
      {
        books.map((book)=>{
            console.log(book)
          
            return(
                <Book key={book.id} {...book}></Book>
                )


        })
      }
    </section>
  );
};


ReactDOM.render(<BookList />, document.getElementById("root"));
