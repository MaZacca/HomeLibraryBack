import { Router } from "express";

import {
  getBook,
  getBooks,
  updateBook,
  deleteBook,
  createBook,
} from "../controllers/books.controller.js";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", getBook);
router.post("/books", createBook);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);

export default router;
