import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../src/components/Product/Product";
import Product2 from "../src/components/Product/Product2";
import Product3 from "../src/components/Product/Product3";
import App from "./App";
import Login from "./components/login";
import SignUp from "./components/signup";
import UserDetails from "./components/userDetails";

function Base() {

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route
            exact
            path="/"
            element={ <App />}
          />
          <Route />
          <Route path="/product" element={<Product />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Base;