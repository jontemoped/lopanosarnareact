import React from "react";

class Home extends React.Component {
	render() {
		return (
		<div class="container">
		<header id="rubrik">
			<h1>TjäderAndens Kennel</h1>
			<h5>Golden retriever och finsk spets</h5>
		</header>
		<nav class="navigering">
			<ul>
				<li><a href="index.html">Meny</a></li>
				<li><a href="hundar.html">Hundar</a></li>
				<li><a href="valpar.html">Valpar</a></li>
				<li><a href="kurser.html">Kurser</a></li>
				<li><a href="omOss.html">Om oss</a></li>
			</ul>
		</nav>
		
		<div class="länkar">
			<div class="länk" id="styling">
			<h2>
			<a id="facebooklänk" href="https://www.facebook.com/profile.php?id=100091361044309" >
				Vår Facebook
			</a>
			</h2>
		</div>
			<div class="länk" id="styling">
			<h2>
			<a id="k9länk" href="https://www.k9data.com/">K9 databas för golden</a>
			</h2>
		</div>
		</div>
		
		<section id="tjaderandens_kennel">
			<h2 class="styckerubrik">Tjäderandens kennel</h2>
			<p class="infotext">På vår kennel finns det Golden Retriever av jakttyp och Finsk Spets. 
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
			<img src="dogowner.jpg" alt="Bild på hund med ägare" id="hundägare" class="bild"/>
		</aside>
		
		<section id="lopanosarna">
			<h2 class="styckerubrik">lopanosarna</h2>
			<p class="infotext" id="fadeBlock1">
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
			<img src="dogjump1.jpg" alt="Bild på hoppande hund" id="hundhopp1" class="bild"/>
			<img src="dogjump2.jpg" alt="Bild på hoppande hund" id="hundhopp2" class="bild"/>
		</aside>
		
		<div id="extrasida" class="styling">
			<h2>
			<a href="extrasida.html">Extrasida</a>
			</h2>
		</div>
		
		<footer id="menyfottext">
			<p id="fottext">Sidan uppdaterades senast 2023-11-14</p>
		</footer>
		
		<button class="länk" id="darkmode" onclick="toggleDarkMode()">Toggle Dark Mode</button>
		
		<button class="länk" id="backgroundimage" onclick="toggleBackgroundImage()">Toggle Background Image</button>
		
		<button class="toggle-info">Toggle Info</button>
		<div class="info-content">
			<section id="infocontent">
				<h3 class="styckerubrik">Golden</h3>
				<p class="infotext">En golden retriever är i grunden en apporterande fågelhund, <br/>
					men är numera en utpräglad familjehund som är intelligent, social och lojal</p>
			</section>
		</div>
		
		</div>
		)
		
	}
}

export default Home;