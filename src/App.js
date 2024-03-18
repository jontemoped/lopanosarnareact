
import Home from "./pages/Index";
import Hundar from "./pages/Hundar";
import Valpar from "./pages/Valpar";
import Kurser from "./pages/Kurser";
import Omoss from "./pages/Omoss";


import Header from './components/Header';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";



import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import Extrasida from "./pages/Extrasida";

function App() {
  return (
		<Router>
		<Header/>
		<Navigation/>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/hundar" element={<Hundar/>}/>
			<Route path="/valpar" element={<Valpar/>}/>
			<Route path="/kurser" element={<Kurser/>}/>
			<Route path="/omOss" element={<Omoss/>}/>
			<Route path="/extrasida" element={<Extrasida/>}/>
		</Routes>
		<Footer/>
		</Router>

  );
}

export default App;