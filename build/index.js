"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
app.get('/api', (req, res) => {
    res.status(200).send('hello world');
});
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
