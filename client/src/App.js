import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Hero />
      <Info />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
