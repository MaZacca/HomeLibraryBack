import  express  from "express";
import morgan from "morgan";
import cors from "cors";

import authroutes from "./routes/auth.routes.js"
import booksroutes from "./routes/books.routes.js"

const app= express()

app.use(cors());
  
app.use(morgan("dev")) //este modulo muestra las peticiones por consola
app.use(express.json()) // middleware para que express entienda JSON

app.use("/api",authroutes);  //el api es para que todas las rutas del back tengan ese prefijo y no se confundan con las rutas del front
app.use("/api",booksroutes); 
export default app;