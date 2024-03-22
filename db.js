import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://mzacca:XwRiEOwFMyNp0oBi@library.bit3m59.mongodb.net/?retryWrites=true&w=majority",{
          dbname: "HomeLibrary"  
        })
        console.log("db conenected")
    } catch (error) {
        console.log(error)
    }
}