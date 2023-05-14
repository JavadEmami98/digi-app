import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./page/Index";
import Product from "./page/Product";
import Item from "./page/Item";

const App = () => (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Index/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/item" element={<Item/>}/>
</Routes>
</BrowserRouter>
)

export default App;
