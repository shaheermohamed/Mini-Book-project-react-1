import React from 'react'

const Book = ({image,title,author} ) => {
    //attribute, eventHandler
    //onClick,onMouseOver
    const clickHandler = () =>{
     alert('hello world')
    } 
   
   return (
     <article className="Book">
      <img src={image}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>view</button>
     </article>
   );
 };
 

export default Book