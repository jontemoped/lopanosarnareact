import React from "react";

import dogjump1 from './dogjump1.jpg';
import hunddöddjur from './hunddöddjur.jpg';
import sovandehund from './sovandehund.jpg';
import hundmedpris from './hundmedpris.jpg';

class Hundar extends React.Component {
	render() {
		return (
<div className="container">

<aside id="valparhundhopp">
	<img src={dogjump1} alt="Bild på hoppande hund" id="valphundhopp" className="bild"/>

</aside>

<aside id="hundardöddjur">
	<img src={hunddöddjur} alt="Bild på hund som luktar på dött djur" id="hunddöddjur" 
	className="bild"/>
</aside>

<section id="goldenRetriever">
	<h2 className="styckerubrik">Golden Retriever</h2>
	<p className="infotext">En golden retriever är en apporterande fågelhund, en jakthund som arbetar efter skottet. 
	   Därför har man tidigare avlat på hundar med en stor vilja att vara föraren till lags och
	   med en stor arbetslust. Detta har gett oss den trevliga ras vi har idag.
	   En Golden kan användas till allt, jakt, lydnad, bruks, viltspår, agility, freestyle, 
	   räddningshund, servicehund, kantarellsök, utställningar,.. bara för att nämna några. 
	   Det är en hund som vill arbeta så när man skaffar en golden måste man tänka på att ge den 
	   möjlighet att få utlopp för sin arbetslust.
	</p>
</section>

<section id="finskSpets">
	<h2 className="styckerubrik">Finsk Spets</h2>
	<p className="infotext">
		En Finsk Spets är en skällande fågelhund, en jakthund som arbetar före skottet. 
		Det har alltid avlats på hundar en stor jaktlust. Detta har gett oss den trevliga 
		ras vi har idag.
		En Finsk Spets ska jaga, det är ingen hund man skaffar sig om man inte ska använda 
		den som jakthund. Den är trots det en mycket trevlig familjehund mellan jaktturerna. 
		Den är dock lite av en enmanshund och kommer att älska den som tar den med ut och jagar.
	</p>
</section>

<h2 id="våraHundar" className="sektionsrubrik">Våra hundar</h2>

<section id="java">
	<h3 className="våraHundarRubrikVänster">Finsk Spets</h3>
	<img src={sovandehund} alt="sovande hund" id="sovandeHund" className="bild"/>
	<h4 className="våraHundarStyckerubrik">Tjäder Fightens Java (Java)</h4>
	<p className="infotext" id="javatext">
		e. SEUCH Börknäs Kippis     u. Tjäderfjäderns K Idun<br/><br/>
		Java har Patella Luxation UA  och är fulltandad<br/><br/>
		Java har ett mycket trevligt sök och skallar fint
	</p>
</section>

<section id="bella">
	<h3 className="våraHundarRubrikHöger">Golden Retriever</h3>
	<img src={hundmedpris} alt="Hund med pris" id="hundMedPris" className="bild"/>
	<h4 className="våraHundarStyckerubrik">RLDN RLDF RLDA SEVCH Höghedens Bellona (Bella)</h4>
	<p className="infotext" id="bellaText">
		e. Alsterbygdens Flaxman of Skoj   u. Höghedens Una<br/><br/>
		Röntgad med HD A-A och ED 0-0<br/><br/>
		GrPRA 1 och 2, Heriditärt fri<br/><br/>
		En härlig tik som är arbetsvillig och lättlärd. Har en stor jaktlust och envishet i arbetet. 
		Bella har haft en kull hos Höghedens kennel.
	</p>
</section>

</div>

		)
		
	}
}

export default Hundar;