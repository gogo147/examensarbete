import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';


const base_url = process.env.REACT_APP_API_URL;

function App() {
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
		<>
			<Hero movies={obj.movies ? obj.movies : []}/>
			<Info movies={obj.movies ? obj.movies : []}/>
			<Explore movies={obj.movies ? obj.movies : []}/>
			<Footer />	
		</>
	);
}

export default App;