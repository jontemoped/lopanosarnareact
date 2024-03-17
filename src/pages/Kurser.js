import React from "react";

import hundarmedpriser from './hundarmedpriser.jpg';
import prispåbacken1 from './prispåbacken1.jpg';
import prispåbacken2 from './prispåbacken2.jpg';

class Kurser extends React.Component {
	render() {
		return (
			<div className="container">
			
			<h2 id="kursutbud" className="sektionsrubrik">Kursutbud</h2>
			
			<section id="kurser">
				<h3 id="lydnad" className="kursrubrik">Lydnad</h3>
				<p className="infotext" id="lydnadtext">Valpkurs<br/>
					Allmänlydnad/ Vardagslydnad<br/>
					Lydnad fortsätter, i skog och mark<br/>
					Lydnad fortsätter, tävlingslydnad<br/>
					Mot Lydnadsklass 1 och apell<br/>
					Mot Lydnadsklass 2<br/>
					Rallylydnad Nybörjare<br/>
					Rallylydnad Fortsättning<br/><br/>
				</p>
				<h3 id="spårkurser" className="kursrubrik">Spårkurser</h3>
				<p className="infotext" id="spårkurstext">Viltspår nybörjare/anlagsklass<br/>
					Viltspår öppenklass/fortsättning<br/>
					Apellspår<br/><br/>
				</p>
				<h3 id="apport" className="kursrubrik">Apport/Jakt</h3>
				<p className="infotext" id="apporttext">
					Apportering nybörjare<br/>
					Apportering fortsättning<br/>
					Working Test nybörjare<br/>
					Working Test fortsättning - ökl<br/>
					Jaktkurs retriever grund<br/>
					Jaktkurs retriever dirigering<br/><br/>
				</p>
				<h3 id="teoretiska" className="kursrubrik">Teoretiska</h3>
				<p className="infotext" id="teoretiskatext">
					Hunduppfödar utbildning (SKK)<br/>
					Tävlingspsykologi<br/>
					Konditions och koordinations träning hund<br/>
					Hundens anatomi och rörelser<br/>
					Hundens Genetik, nedärvning och färger.<br/><br/>
				</p>
				<h3 id="special" className="kursrubrik">Special</h3>
				<p className="infotext" id="specialtext">
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
				<img src={hundarmedpriser} alt="två hundar med varsitt pris" id="hundarmedpriser" className="bild"/>
			</aside>
			
			<aside id="prispåbacken">
				<img src={prispåbacken1} alt="Ässi med pris" id="prispåbacken1" className="bild"/>
				<img src={prispåbacken2} alt="Bella med pris" id="prispåbacken2" className="bild"/>
			</aside>
		
			</div>
		)
		
	}
}

export default Kurser;