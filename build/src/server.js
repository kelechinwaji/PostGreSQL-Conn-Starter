"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_structure_1 = require("./models/books_structure");
const app = (0, express_1.default)();
const PORT = 5000;
const adventureBook = new books_structure_1.AdventureBookStore();
app.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const result = await adventureBook.index();
    // res.send(result);
    //res.status(200).send('hello world')
    const book = {
        id: 2,
        title: 'things fall apart',
        author: 'chinua achebe',
        total_pages: 1000,
        summary: 'philosophy of life',
    };
    const adventureBook = new books_structure_1.AdventureBookStore();
    const result = yield adventureBook.create(book);
    res.send(result);
}));
app.listen(PORT, () => { console.log(`app is listening on port: ${PORT}`); });
exports.default = app;
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
