import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./components/category";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Product from "./components/product";
import Home from "./components/home";
import AddCategory from "./components/addCategory";
import AddProduct from "./components/addProduuct";
import ForgotPassword from "./components/forgotPassword";


// import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="Category" element={<Category></Category>}></Route>
        <Route path="Product" element={<Product></Product>}></Route>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path="forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
        

        <Route path="/sidebar" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="Category" element={<Category />} />
          <Route path="AddCategory" element={<AddCategory />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="Product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
