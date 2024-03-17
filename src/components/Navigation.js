import React from 'react';
import {NavLink, Link} from "react-router-dom";

class Navigation extends React.Component {
	render() {
		return (
			<nav className="navigering">
			<ul>
				<li><NavLink to="/">Meny</NavLink></li>
				<li><NavLink to="/hundar">Hundar</NavLink></li>
				<li><NavLink to="/valpar">Valpar</NavLink></li>
				<li><NavLink to="/kurser">Kurser</NavLink></li>
				<li><NavLink to="/omOss">Om oss</NavLink></li>
			</ul>
			</nav>
		)
	}
}

export default Navigation;