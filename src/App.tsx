import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import Products from "./routes/Home/Products";
import ProductCatalog from "./routes/Home/Products/ProductsCatalog";

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} >
        <Route index element={<Navigate to="/home"/>} />
        <Route path="/home" element={<HomeBody/>}/>
        <Route path="/products" element={<Products/>} >
          <Route path=":tagProduct" element={<ProductCatalog />} />
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );

}
