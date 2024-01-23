import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./db.js";
import "dotenv/config";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//ROUTES//

//add a book

app.post("/books", async(req,res) => {
  try {
  
  } catch (err) {
    console.error(err.message);
  }
});

//get all books
app.get("/books", async(req,res) => {
  const allBooks = await pool.query("SELECT * FROM books");
  res.json(allBooks.rows);
})
//get a book



//update a book

//delete a book

app.listen(port, () => {
  console.log(`server has started on port ${port}`)
});