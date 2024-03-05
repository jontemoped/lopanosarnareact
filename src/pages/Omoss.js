
import React from "react";

class Omoss extends React.Component {
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

<section id="intresseanmälan">
	<h2 class="styckerubrik">Intresseanmälan valp</h2>
	<p id="intresseanmälantext" class="infotext">
		Att tänka på..<br/>
		En Finsk spets är en arbetsglad hund som trivs bäst ute på jakt.
		Våra Goldens är avlade på arbetande linjer och har därför ett stort 
		behov av fysisk och mental stimulering.
		Vi rekomenderar därför inte en Finsk spets eller en Jaktgolden till 
		dej som söker en ren sällskapshund.
	</p>
	<div class="line"></div>
	<form action="mailto:jonathanwebbteknik@gmail.com" method="get">
		<label class="textlabel" for="fnamn">Namn</label>
		<input type="text" id="fnamn" name="namn" placeholder="Namn" required/>
		<label class="textlabel" for="telefon">Telefon</label>
		<input type="text" id="telefon" name="telefon" placeholder="Telefon" required/>
		<label class="textlabel" for="email">Email</label>
		<input type="text" id="email" name="email" placeholder="Email" required/>
		<label class="textlabel" for="stad">Stad och län</label>
		<input type="text" id="stad" name="stad" placeholder="Vilken stad och län bor du i" required/>

		<div class="line"></div>
	<div id="vilkenras">
		<label class="radiolabel">Vilken ras funderar du på?</label>
		<input type="radio" id="goldenretriever" name="ras" value="goldenretriever" required/>
		<label class="radiobuttonlabel" for="goldenretriever">Golden retriever</label>
		<input type="radio" id="finskspets" name="ras" value="finskspets"/>
		<label class="radiobuttonlabel" for="finskspets">Finsk spets</label>
	</div>
	<div class="line"></div>
	<div id="jagföredrar">
		<label class="radiolabel">Jag föredrar helst:</label>
		<input type="radio" id="hane" name="föredrar" value="hane" required/>
		<label class="radiobuttonlabel" for="hane">Hane</label>
		<input type="radio" id="tik" name="föredrar" value="tik"/>
		<label class="radiobuttonlabel" for="tik">Tik</label>
		<input type="radio" id="ingenroll" name="föredrar" value="ingenroll"/>
		<label class="radiobuttonlabel" for="ingenroll">Spelar ingen roll</label>
	</div>
	<div class="line"></div>
	<div id="hardu">
		<label class="radiolabel">Har du erfarenhet av att starta på prov, tävla med hund?</label>
		<input type="radio" id="tävlaja" name="erfaren" value="tävlaja" required/>
		<label class="radiobuttonlabel" for="tävlaja">Ja</label>
		<input type="radio" id="tävlanej" name="erfaren" value="tävlanej"/>
		<label class="radiobuttonlabel" for="tävlanej">Nej</label>
		<input type="radio" id="arbetar" name="erfaren" value="arbetar"/>
		<label class="radiobuttonlabel" for="arbetar">Nej, men arbetar aktivt med min tidigare hund</label>
	</div>
	<div class="line"></div>
	<div id="jagär">
		<label class="radiolabel">Jag är intresserad av:</label>
		<input type="radio" id="valp" name="intresse" value="valp" required/>
		<label class="radiobuttonlabel" for="valp">Valp</label>
		<input type="radio" id="vuxen" name="intresse" value="vuxen"/>
		<label class="radiobuttonlabel" for="vuxen">Vuxen hund</label>
	</div>
	<div class="line"></div>
	<div id="hafthund">
		<label class="radiolabel">Har du nu eller har du som vuxen tidigare haft hund?</label>
		<input type="radio" id="tidigareja" name="tidigare" value="tidigareja" required/>
		<label class="radiobuttonlabel" for="tidigareja">Ja</label>
		<input type="radio" id="tidigarenej" name="tidigare" value="tidigarenej"/>
		<label class="radiobuttonlabel" for="tidigarenej">Nej</label>
	</div>
	<div class="line"></div>
	<div id="jagvill">
		<label class="radiolabel">Jag vill träna, tävla eller arbeta aktivt med min
			hund inom följande områden:
		</label>
		<div>
		<input type="checkbox" id="jakt" name="områden" value="jakt" required/>
		<label class="checkboxlabel" for="jakt">Jakt, Jaktprov</label>
		</div>
		<div>
		<input type="checkbox" id="tjänstehund" name="områden" value="tjänstehund"/>
		<label class="checkboxlabel" for="tjänstehund">Tjänstehund</label>
		</div>
		<div>
		<input type="checkbox" id="viltspår" name="områden" value="viltspår"/>
		<label class="checkboxlabel" for="viltspår">Viltspår</label>
		</div>
		<div>
		<input type="checkbox" id="rallylydnad" name="områden" value="rallylydnad"/>
		<label class="checkboxlabel" for="rallylydnad">Rallylydnad, tävlingslydnad, bruksprov</label>
		</div>
		<div>
		<input type="checkbox" id="nosework" name="områden" value="nosework"/>
		<label class="checkboxlabel" for="nosework">Nosework eller liknande</label>
		</div>
		<div>
		<input type="checkbox" id="agility" name="områden" value="agility"/>
		<label class="checkboxlabel" for="agility">Agility, freestyle, heelwork eller liknande</label>
		</div>
		<div>
		<input type="checkbox" id="pedagogik" name="områden" value="pedagogik"/>
		<label class="checkboxlabel" for="pedagogik">Hundassisterad pedagogik eller liknande</label>
		</div>
		<div>
		<input type="checkbox" id="annan" name="områden" value="annan"/>
		<label class="checkboxlabel" for="annan">Annan hundaktivitet, berätta gärna vad</label>
		</div>
	</div>

	<div class="line"></div>


		<label for="presentation">
			Presentation om dig själv och dina tidigare erfarenheter.
			Motivera gärna varför du vill ha en hund från oss
		</label>
		<textarea id="presentation" name="presentation" placeholder="Skriv här"></textarea>

		<button id="knapp" type="submit">Skicka</button>



	</form>
</section>

<aside id="hundmedvalparaside" class="pictureaside">
	<img src="hundmedvalpar.jpg" alt="Hund med sina valpar" id="hundmedvalpar" class="bild"/>
</aside>

<aside id="valpihandaside" class="pictureaside">
	<img src="valpihand.jpg" alt="Valp i en hand" id="valpihand" class="bild"/>
</aside>

<aside id="utforskandevalpaside" class="pictureaside">
	<img src="utforskandevalp.jpg" alt="valp som går på en matta" id="utforskandevalp" class="bild"/>
</aside>

<aside id="sovandevalpaside" class="pictureaside">
	<img src="sovandevalp.jpg" alt="Valp som ligger och sover" id="sovandevalp" class="bild"/>
</aside>


<button class="länk" id="darkmodevalpar" onclick="toggleDarkMode()">Toggle Dark Mode</button>

<button class="länk" id="backgroundimagevalpar" onclick="toggleBackgroundImage()">Toggle Background Image</button>


<footer id="menyfottext">
	<p id="fottext">Sidan uppdaterades senast 2023-11-14</p>
</footer>
</div>
		)
		
	}
}

export default Omoss;