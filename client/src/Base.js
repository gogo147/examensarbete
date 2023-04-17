import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../src/components/Product/Product";
import Product2 from "../src/components/Product/Product2";
import Product3 from "../src/components/Product/Product3";
import Login from "./components/login";
import SignUp from "./components/signup";
import UserDetails from "./components/userDetails";
import App from "./App";
import { useEffect, useState } from "react";
import axios from "axios";

const base_url = process.env.REACT_APP_API_URL;

function Base() {

  const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "rating", order: "desc" });
	const [filterGenre, setFilterGenre] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getAllMovies = async () => {
			try {
				const url = `${base_url}?page=${page}&sort=${sort.sort},${
					sort.order
				}&genre=${filterGenre.toString()}&search=${search}`;
				const { data } = await axios.get(url);
				setObj(data);
			} catch (err) {
				console.log(err);
			}
		};

		getAllMovies();
	}, [sort, filterGenre, page, search]);

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
          <Route path="/product" element={<Product movies={obj.movies ? obj.movies : []} />} />
          <Route path="/product2" element={<Product2 movies={obj.movies ? obj.movies : []} />} />
          <Route path="/product3" element={<Product3 movies={obj.movies ? obj.movies : []} />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Base;