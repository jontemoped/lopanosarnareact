import React from "react";

import {NavLink} from "react-router-dom";

import goldenretriever from './goldenretriever.mp4';

class Extrasida extends React.Component {
	render() {
		return (
<div class="container">
<header id="rubrik">
	<h1>Extrasida med video och tabell</h1>
</header>

<section id="video">
	<h2 class="styckerubrik" id="videorubrik">6 saker varje Golden retriever förälder vet</h2>
	<video class="bild" controls>
		<source src={goldenretriever} type="video/mp4"/>
		Din webbläsare stöder inte HTML videon.
	</video>
</section>

	<table>
		<tr>
			<th>Nr</th>
			<th>Mest populära hundraserna</th>
			<th>Vanligaste hundraserna</th>
		</tr>
		<tr>
			<td>1</td>
			<td>Boxer</td>
			<td>Labrador retriever</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Golden retriever</td>
			<td>Schäfer</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Papillon</td>
			<td>Chihuahua</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Rottweiler</td>
			<td>Golden retriever</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Australian shephard</td>
			<td>Jack russell terrier</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Cocker spaniel</td>
			<td>Jämthund</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Beagle</td>
			<td>Rottweiler</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Bichon havanais</td>
			<td>Dvärgshnauzer</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Border collie</td>
			<td>Fransk bulldogg</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Grand danois</td>
			<td>Border collie</td>
		</tr>
	</table>

<section id="tillbaka" class="länk">
	<NavLink to="/">TIllbaka</NavLink>
</section>


</div>

		)
		
	}
}

export default Extrasida;