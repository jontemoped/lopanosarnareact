import React from "react";

class Kurser extends React.Component {
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
			
			<h2 id="kursutbud" class="sektionsrubrik">Kursutbud</h2>
			
			<section id="kurser">
				<h3 id="lydnad" class="kursrubrik">Lydnad</h3>
				<p class="infotext" id="lydnadtext">Valpkurs<br/>
					Allmänlydnad/ Vardagslydnad<br/>
					Lydnad fortsätter, i skog och mark<br/>
					Lydnad fortsätter, tävlingslydnad<br/>
					Mot Lydnadsklass 1 och apell<br/>
					Mot Lydnadsklass 2<br/>
					Rallylydnad Nybörjare<br/>
					Rallylydnad Fortsättning<br/><br/>
				</p>
				<h3 id="spårkurser" class="kursrubrik">Spårkurser</h3>
				<p class="infotext" id="spårkurstext">Viltspår nybörjare/anlagsklass<br/>
					Viltspår öppenklass/fortsättning<br/>
					Apellspår<br/><br/>
				</p>
				<h3 id="apport" class="kursrubrik">Apport/Jakt</h3>
				<p class="infotext" id="apporttext">
					Apportering nybörjare<br/>
					Apportering fortsättning<br/>
					Working Test nybörjare<br/>
					Working Test fortsättning - ökl<br/>
					Jaktkurs retriever grund<br/>
					Jaktkurs retriever dirigering<br/><br/>
				</p>
				<h3 id="teoretiska" class="kursrubrik">Teoretiska</h3>
				<p class="infotext" id="teoretiskatext">
					Hunduppfödar utbildning (SKK)<br/>
					Tävlingspsykologi<br/>
					Konditions och koordinations träning hund<br/>
					Hundens anatomi och rörelser<br/>
					Hundens Genetik, nedärvning och färger.<br/><br/>
				</p>
				<h3 id="special" class="kursrubrik">Special</h3>
				<p class="infotext" id="specialtext">
					Även kurser efter ert önskemål och skräddarsydda kurser för enskilda<br/> 
					eller mindre grupper.
					Kurserna hålls även som helgkurser med samma<br/> innehåll och antal studietimmar. 
					Kurserna kan även hållas på dagtid.<br/>  Kurserna hålls både i egen regi samt via 
					SSRK, GRK och Studiefrämjandet.<br/><br/>
					Egna kurser hålls när jag fått in tillräckligt med anmälningar och tid finnes.<br/> 
					Så om ni vill gå en kurs så anmäl via mail.. kurserna planeras då i samråd<br/> med 
					de som anmält sig. För att anmäla direkt till mej ta kontakt via mail.<br/><br/>
					För alla kurser gäller att hunden ska vara vaccinnerad. Intyg ska uppvisas<br/> för 
					instruktören vid första träffen.<br/>
					1 studietimme = 45min. Kursen ska vara betald innan kursstart.<br/>
					Anmälan via mail.
				</p>
			</section>
			
			<aside id="hundarmedpris">
				<img src="hundarmedpriser.jpg" alt="två hundar med varsitt pris" id="hundarmedpriser" class="bild"/>
			</aside>
			
			<aside id="prispåbacken">
				<img src="prispåbacken1.jpg" alt="Ässi med pris" id="prispåbacken1" class="bild"/>
				<img src="prispåbacken2.jpg" alt="Bella med pris" id="prispåbacken2" class="bild"/>
			</aside>
			
			<button class="länk" id="darkmode" onclick="toggleDarkMode()">Toggle Dark Mode</button>
			
			<button class="länk" id="backgroundimage" onclick="toggleBackgroundImage()">Toggle Background Image</button>
			
			
			<footer>
				<p id="fottext">Sidan uppdaterades senast 2023-11-14</p>
			</footer>
			</div>
		)
		
	}
}

export default Kurser;