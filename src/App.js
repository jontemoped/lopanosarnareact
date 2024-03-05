import Home from "./pages/Index";
import Hundar from "./pages/Hundar";
import Valpar from "./pages/Valpar";
import Kurser from "./pages/Kurser";
import Omoss from "./pages/Omoss";

// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

function App() {
  return (
	<div>
		<Home/>
		<Hundar/>
		<Valpar/>
		<Kurser/>
		<Omoss/>
	</div>
  );
}

export default App;
