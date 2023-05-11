import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./page/Index";
import Product from "./page/Product";

const App = () => (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Index/>}/>
  <Route path="/product" element={<Product/>}/>
</Routes>
</BrowserRouter>
)

export default App;
