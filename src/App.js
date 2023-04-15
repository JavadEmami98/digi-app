import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./page/Index";

const App = () => (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Index/>}/>
</Routes>
</BrowserRouter>
)

export default App;
