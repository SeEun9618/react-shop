import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "./components/Carousel";
import Products from "./components/Products";



function App() {
  return (
    <div className="App">
        <Header />
        <Carousel />
        <Products />
    </div>
  );
}

export default App;
