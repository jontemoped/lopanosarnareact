import React from "react";
import dogjump1 from './dogjump1.jpg';
import dogjump2 from './dogjump2.jpg';
import dogowner from './dogowner.jpg';

class Home extends React.Component {
	render() {
		return (
		<div className="container">
		
		<div className="länkar">
			<div className="länk" id="styling">
			<h2>
			<a id="facebooklänk" href="https://www.facebook.com/profile.php?id=100091361044309" >
				Vår Facebook
			</a>
			</h2>
		</div>
			<div className="länk" id="styling">
			<h2>
			<a id="k9länk" href="https://www.k9data.com/">K9 databas för golden</a>
			</h2>
		</div>
		</div>
		
		<section id="tjaderandens_kennel">
			<h2 className="styckerubrik">Tjäderandens kennel</h2>
			<p className="infotext">På vår kennel finns det Golden Retriever av jakttyp och Finsk Spets. 
				Vi avlar på friska, mentalt starka och arbetssugna individer. 
				<br/><br/>
				Vår uppfödning är liten.
				<br/>
				Finnspetsarna avlas till jakt. 
				<br/>
				Våra goldens är av jaktlinjer, valparna säljs främst till jakt, bruks, lydnad och tjänstehund.<br/><br/>
				Är du intresserad av en valp från oss finns mer information under <a href="valpar.html">"valpar"</a></p>
		</section>
		
		<aside id="hundbild1">
			<img src={dogowner} alt="Bild på hund med ägare" id="hundägare" class="bild"/>
		</aside>
		
		<section id="lopanosarna">
			<h2 className="styckerubrik">lopanosarna</h2>
			<p className="infotext" id="fadeBlock1">
				Är en lös samling av personer som gillar att träna med sina hundar. 
				Det spelar ingen roll vad man vill träna eller på vilken nivå man är.<br/><br/>
				Vi peppar och hjälper varandra, om någon vill prova något nytt så hjälps 
				vi åt att ta reda<br/> på vad som krävs och hur man ska träna.<br/> 
				Det enda viktiga är att man vill arbeta med sin hund på ett positivt 
				sätt och ha roligt under tiden.<br/><br/>
				I Löparnäs finns det stora träningsytor, klippta lydnadsplaner, egen stuga, 
				utedass, material att låna och en "parcour"bana under uppbyggnad.
			</p>
		</section>
		
		<aside id="hundhoppare">
			<img src={dogjump1} alt="Bild på hoppande hund" id="hundhopp1" className="bild"/>
			<img src={dogjump2} alt="Bild på hoppande hund" id="hundhopp2" className="bild"/>
		</aside>
		
		<div id="extrasida" className="styling">
			<h2>
			<a href="extrasida.html">Extrasida</a>
			</h2>
		</div>
		
		</div>
		)
		
	}
}

export default Home;