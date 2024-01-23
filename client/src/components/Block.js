import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

function TextExample() {
  const[books, setBooks]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data)
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  },[]);


console.log(books);

return (
  <div className="container" id="books">
    <div className="row" id="card">
      {books.map((book) => (
        <div className="col-6 mb-3" key={uuidv4()}>
        <div className="card" style={{width: "36rem"}}>
  <div className="card-body">
    <h5 className="card-title">{book.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{book.author}</h6>
    <p className="card-text">{book.summary}</p>
    <div className= "d-flex justify-content-end">
     <button className="card-link">My notes</button>
     <button className="card-link">Comment</button>
     </div> 
  </div>
</div>
        </div>
      ))}
    </div>
  </div>
);

      }

export default TextExample;