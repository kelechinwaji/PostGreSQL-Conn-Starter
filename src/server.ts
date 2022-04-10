import { Book } from "./models/books_structure";
import express from "express";
import { AdventureBookStore } from "./models/books_structure";

const app = express();
const PORT = 5000;

 const adventureBook = new AdventureBookStore();
app.get('/api', async (req, res) =>{
  //const result = await adventureBook.index();
 // res.send(result);
  //res.status(200).send('hello world')

  const book: Book ={
    id: 2,
    title: 'things fall apart',
    author: 'chinua achebe',
    total_pages: 1000,
    summary: 'philosophy of life',

  } 

  const adventureBook = new AdventureBookStore();
  const result = await adventureBook.create(book);
  res.send(result)

});

app.listen(PORT, ()=> {console.log(`app is listening on port: ${PORT}`);}
)

export default app;

































// import axios from "axios";

// async function getAllCountries() {
//   try {
//     const response = await axios.get("https://restcountries.com/v2/all");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function getCountriesByRegion() {
//   try {
//     const response = await axios.get("https://restcountries.com/v3.1/region/africa");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function getCountriesByName() {
//   try {
//     const response = await axios.get("https://restcountries.com/v3.1/name/nigeria");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default { getCountriesByName, getAllCountries, getCountriesByRegion };
