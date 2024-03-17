
import React from "react";

import dogowner from './dogowner.jpg';
import FAQ from '../components/FAQ';

class Omoss extends React.Component {
	render() {
		const faqs = [
			{
			  question: "Hur kontaktar jag dig?",
			  answer: "Du kan nå mig via min email: susanna@loparnosarna.se eller på telefon: 073-849 22 20."
			},
			{
			  question: "Var finns ni?",
			  answer: "addressen är: Löparnäs 4, 936 91 BOLIDEN."
			},	   
		   ];
		return (
<div className="container">

<section id="liteommig">
	<h2 className="sektionsrubrik">Lite om mig</h2>
	<h4 className="ommigstyckerubrik">Mitt namn är Susanna Johansson</h4>
	<p className="infotext" id="susannatext">
		Jag växte upp på en kennel.. Mamma födde upp tax och beagle under prefixet Lidbergets..
		Min första hund var SUCH SVCH Mickels Märla strävhårig normaltax, hemma fanns hästar, 
		kaniner och katter... Sommrarna tillbringades oftast hos Farfar som hade jordbruk med 
		kor och grisar. Under en hel del år var det mest hästar som gällde.. jag tävlade aktivt
		i både hoppning och dressyr samt ledde ridskolans tävlingssektion.. jag höll även 
		ridlektioner på ridskolan.
		När jag och min Sambo beslöt oss för att skaffa en egen hund, så föll valet på en 
		Golden Retriever. Eftersom vi jobbade rätt mycket så blev det en vuxen omplaceringshund. 
		Chippen,  4 år, en underbar hund. Vi fick en hel del underbara år tillsammans innan 
		Cippen lämnade oss till vår stora saknad, julen 2004.<br/>
		Sen flyttade vi ut till Löparnäs och intresset för jakt väcktes, jag tog jägarexamen
		och började jaga, både småvilt och älg...
		Detta ledde till att nästa Golden (och de efterföljande) kommer från jaktlinjer och 
		att Finnspetsarna flyttade in i famlijen.<br/>
		Intresset för att jobba med utbildning har alltid funnits och det har lett till att jag 
		utbildat mej till Diplomerad och Certifierad instruktör för SSRK. En hel del andra 
		utbildningar har det blivit: Grk's och SKK's uppfödarutbildning, Grk's exteriörbeskr. 
		steg1, Jägareförbundets eftersöksutb. Steg 1, Mentalitets utbildning M1och M2 mm
		Utbildad Viltspårsdomare och provledare för B-prov retriever.<br/>
		Jag har varit verksam inom SSRK och GRK (Retriever Jakt ansvarig SSRK-vb och 
		SSRK-Ske-å.sekt.) Är fortfarande Kontaktperson GRK- vb i Skellefteå<br/>
		Håller ibland kurser, mest inom Jakt och Apportering men även en del lydnadskurser 
		samt Hunduppfödarutbildning i SKK´s regi, lite anatomi och genetik blir det oxå.
		Tävlar och tränar en hel del... Mest Jakt/Apportering, Rally lydnad och Lydnad men 
		även Viltspår och Bruksspår.<br/>
		Planerar att föda upp, Golden retriver och Finska Spets.
		För båda raserna gäller att de ska vara friska och mentalt starka med en god Jaktlust 
		och "will to please" och dessutom en fullgod exteriör.<br/>
		Jag har turen att ha en sambo som delar mitt intresse för jakthundar..  
		Vi tränar mycket tillsammans och det gör att träningen blir mycket mer varierad än om 
		man skulle träna på egen hand.<br/>
	</p>
		<h4 className="ommigstyckerubrik">Löparnäs</h4>
	<p className="infotext" id="susannatext1">
		Gården ligger ca 25km väster Skellefteå, ganska centralt placerad i Skellefteåkommun.
		Här har vi hittat oss en liten oas då vår närnamste granne bor ca 3km bort på 
		andra sidan om skogen.
		På åkrarna runt husen håller jag kurser i lydnad och Apportering , skönt att våga 
		släppa lös unghundar utan att behöva vara rädd för trafiken. Här håller även 
		SSRK-skellefteåsektionen en del av sina Working Test.. så det finns en del svårigheter 
		med olika hinder uppbygda.
		Med jaktmarken runt knuten så är vi lyckligt lottade, i alla fall om man vill jaga Älg..
		som mest har vi sett 17st djur samtidigt i byn!!!!..
		Så ibland blir det viltstörning på viltspårsproven som hålls runt byn.
	</p>
</section>

<section id="kontaktinfo">
	<img src={dogowner} alt="Bild på hund med ägare" className="bild" id="hundägareomoss"/>
	<h3>Kontaktinfo:</h3>
	<p id="kontaktinfotext" >
		Susanna Johansson<br/>
		Löparnäs 4<br/>
		936 91 BOLIDEN<br/><br/>
		Mail:susanna@loparnosarna.se<br/>
		Telefon: 073-849 22 20
	</p>
</section>

<section id="vägbeskrivning">
	<h2 className="sektionsrubrik">Vägbeskrivning:</h2>
	<p className="infotext" id="vägbeskrivningstext">
		Från Skellefteå kör Väg 95 mot Bodö (Boliden) ca 2mil. <br/>
		(passera avfarter mot Varuträsk). På 70-sträckan sväng<br/> vänster 
		mot Åliden och Bjurån. Kör över berget.<br/> I Bjurån följ gatuljuset 
		(dvs håll höger) Där gatuljuset<br/> tar slut sväng höger in på bondgård... <br/>
		Kör mellan husen!! och fortsätt vägen över åkrarna..<br/>följ vägen ca 
		3km genom skogen så kommer du fram till vår By.
	</p>
</section>
<section id="faq-section">
          <h2 id="faqheader">Vanliga frågor</h2>
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </section>

</div>
		)
		
	}
}

export default Omoss;