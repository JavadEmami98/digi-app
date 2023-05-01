import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./page/Index";
import Products from "./page/Products";
import Product from "./page/Product";

const App = () => (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Index/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/product" element={<Product/>}/>
</Routes>
</BrowserRouter>
)

export default App;
