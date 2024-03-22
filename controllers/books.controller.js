import Book from "../models/book.model.js";


export const getBooks = async (req, res) => {
    const books = await Book.find()
    res.json(books)
};

export const createBook = async (req, res) => {
    const { title, author, saga, pages, genre, subgenre, subject, estante, lang, read, prestado, oLkey, aux } = req.body;

    try {
      const newBook = new Book({
        title, author, saga, pages, genre, subgenre, subject, estante, lang, read, prestado, oLkey, aux
      });
  
      await newBook.save();
    } catch (error) {
      console.log(error);
    }
  
    res.send("Book saved");
};
export const getBook = async (req, res) => {

    const book = await Book.findById(req.params.id)
    if(!book) return res.status(400).json({message: "Book not found"})
    res.json(book);
};
export const updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true}) //new es para que me devuelva el dato nuevo y no el viejo
    if(!book) return res.status(400).json({message: "book not found"})
    res.json(book);
};
export const deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    if(!book) return res.status(400).json({message: "book not found"})
    return res.sendStatus(204);
};
