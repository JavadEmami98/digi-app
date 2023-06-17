import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./page/Index";
import Product from "./page/Product";
import Item from "./page/Item";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/product" element={<Product />} />
      <Route path="/item" element={<Item />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
