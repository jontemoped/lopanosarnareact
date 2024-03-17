import React from 'react';
import Captcha from '../components/Captcha';

import hundmedvalpar from './hundmedvalpar.jpg';
import valpihand from './valpihand.jpg';
import utforskandevalp from './utforskandevalp.jpg';
import sovandevalp from './sovandevalp.jpg';



class Valpar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interests: {
				jakt: false,
				tjänstehund: false,
				viltspår: false,
				rallylydnad: false,
				nosework: false,
				agility: false,
				pedagogik: false,
				annan: false,

			},
			namn: '',
			email: '',
			telefon: '',
			stad: '',
			ras: '',
			föredrar: '',
			erfaren: '',
			intresse: '',
			tidigare: '',
			presentation: '',
			
			captchakey: 0,
			captchaValid: false,
		};
	      }

	      handleCheckboxChange = (event) => {
		const { name } = event.target;
		this.setState(prevState => ({
		  interests: {
		    ...prevState.interests,
		    [name]: !prevState.interests[name]
		  }
		}));
	      };	      

	      handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	      };	      
	    
	      handleCaptchaValidation = (isValid) => {
		this.setState({ captchaValid: isValid });
	      };
	    
	      handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.captchaValid) {
		  alert('CAPTCHA är fel. Var snäl försök igen!');

		  this.setState(prevState => ({ captchaKey: prevState.captchaKey + 1 }));
		  return;
		}

		  // Collect form data
		  const formData = {
			namn: this.state.namn,
			email: this.state.email,
			telefon: this.state.telefon,
			stad: this.state.stad,
			ras: this.state.ras,
			föredrar: this.state.föredrar,
			erfaren: this.state.erfaren,
			intresse: this.state.intresse,
			tidigare: this.state.tidigare,
			presentation: this.state.presentation,
			
		      };
		console.log('Form Data:', formData);
		// Proceed with form submission logic here
		 // Retrieve existing submissions from localStorage
		 const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
		 // Add new submission
		 submissions.push(formData);
		 // Save back to localStorage
		 localStorage.setItem('formSubmissions', JSON.stringify(submissions));
		 this.setState(prevState => ({ captchaKey: prevState.captchaKey + 1 }));
		 this.setState({
			interests: {
				jakt: false,
				tjänstehund: false,
				viltspår: false,
				rallylydnad: false,
				nosework: false,
				agility: false,
				pedagogik: false,
				annan: false,	
			},
			namn: '',
			email: '',
			telefon: '',
			stad: '',
			ras: '',
			föredrar: '',
			erfaren: '',
			intresse: '',
			tidigare: '',
			presentation: '',
			
			
			captchaValid: false,
		 });
		 
		alert('Form skickad korrekt!');
	      };
	render() {

		return (
<div class="container">

<section id="intresseanmälan">
	<h2 className="styckerubrik">Intresseanmälan valp</h2>
	<p id="intresseanmälantext" className="infotext">
		Att tänka på..<br/>
		En Finsk spets är en arbetsglad hund som trivs bäst ute på jakt.
		Våra Goldens är avlade på arbetande linjer och har därför ett stort 
		behov av fysisk och mental stimulering.
		Vi rekomenderar därför inte en Finsk spets eller en Jaktgolden till 
		dej som söker en ren sällskapshund.
	</p>
	<div className="line"></div>
	<form onSubmit={this.handleSubmit}>
		<label className="textlabel" for="fnamn">Namn</label>
		<input type="text" id="fnamn" name="namn" placeholder="Namn"  
		value={this.state.namn} onChange={this.handleInputChange} required/>
		<label className="textlabel" for="telefon">Telefon</label>
		<input type="text" id="telefon" name="telefon" placeholder="Telefon" 
		value={this.state.telefon} onChange={this.handleInputChange} required/>
		<label className="textlabel" for="email">Email</label>
		<input type="text" id="email" name="email" placeholder="Email" 
		value={this.state.email} onChange={this.handleInputChange} required/>
		<label className="textlabel" for="stad">Stad och län</label>
		<input type="text" id="stad" name="stad" placeholder="Vilken stad och län bor du i"  
		value={this.state.stad} onChange={this.handleInputChange} required/>

		<div className="line"></div>
	<div id="vilkenras">
		<label className="radiolabel">Vilken ras funderar du på?</label>
		<input type="radio" id="goldenretriever" name="ras" value="goldenretriever" 
		checked={this.state.ras === "goldenretriever"} 
		onChange={this.handleInputChange} required/>
		<label className="radiobuttonlabel" for="goldenretriever">Golden retriever</label>
		<input type="radio" id="finskspets" name="ras" value="finskspets"
		checked={this.state.ras === "finskspets"}
		onChange={this.handleInputChange} />
		<label className="radiobuttonlabel" for="finskspets">Finsk spets</label>
	</div>
	<div className="line"></div>
	<div id="jagföredrar">
		<label className="radiolabel">Jag föredrar helst:</label>
		<input type="radio" id="hane" name="föredrar" value="hane" 
		checked={this.state.föredrar === "hane"} 
		onChange={this.handleInputChange} required/>
		<label class="radiobuttonlabel" for="hane">Hane</label>
		<input type="radio" id="tik" name="föredrar" value="tik"
		checked={this.state.föredrar === "tik"} 
		onChange={this.handleInputChange}/>
		<label className="radiobuttonlabel" for="tik">Tik</label>
		<input type="radio" id="ingenroll" name="föredrar" value="ingenroll"
		checked={this.state.föredrar === "ingenroll"}
		onChange={this.handleInputChange}/>
		<label className="radiobuttonlabel" for="ingenroll">Spelar ingen roll</label>
	</div>
	<div className="line"></div>
	<div id="hardu">
		<label className="radiolabel">Har du erfarenhet av att starta på prov, tävla med hund?</label>
		<input type="radio" id="tävlaja" name="erfaren" value="tävlaja"
		checked={this.state.erfaren === "tävlaja"} 
		onChange={this.handleInputChange} required/>
		<label className="radiobuttonlabel" for="tävlaja">Ja</label>
		<input type="radio" id="tävlanej" name="erfaren" value="tävlanej"
		checked={this.state.erfaren === "tävlanej"} 
		onChange={this.handleInputChange}/>
		<label className="radiobuttonlabel" for="tävlanej">Nej</label>
		<input type="radio" id="arbetar" name="erfaren" value="arbetar"
		checked={this.state.erfaren === "arbetar"} 
		onChange={this.handleInputChange}/>
		<label className="radiobuttonlabel" for="arbetar">Nej, men arbetar aktivt med min tidigare hund</label>
	</div>
	<div className="line"></div>
	<div id="jagär">
		<label className="radiolabel">Jag är intresserad av:</label>
		<input type="radio" id="valp" name="intresse" value="valp" 
		checked={this.state.intresse === "valp"} 
		onChange={this.handleInputChange} required/>
		<label className="radiobuttonlabel" for="valp">Valp</label>
		<input type="radio" id="vuxen" name="intresse" value="vuxen"
		checked={this.state.intresse === "vuxen"} 
		onChange={this.handleInputChange}/>
		<label className="radiobuttonlabel" for="vuxen">Vuxen hund</label>
	</div>
	<div className="line"></div>
	<div id="hafthund">
		<label className="radiolabel">Har du nu eller har du som vuxen tidigare haft hund?</label>
		<input type="radio" id="tidigareja" name="tidigare" value="tidigareja" 
		checked={this.state.tidigare === "tidigareja"} 
		onChange={this.handleInputChange} required/>
		<label className="radiobuttonlabel" for="tidigareja">Ja</label>
		<input type="radio" id="tidigarenej" name="tidigare" value="tidigarenej"
		checked={this.state.tidigare === "tidigarenej"} 
		onChange={this.handleInputChange}/>
		<label className="radiobuttonlabel" for="tidigarenej">Nej</label>
	</div>
	<div class="line"></div>
	<div id="jagvill">
		<label className="radiolabel">Jag vill träna, tävla eller arbeta aktivt med min
			hund inom följande områden:
		</label>
		<div>
		<input type="checkbox" id="jakt" name="jakt" value="jakt" 
		checked={this.state.interests.jakt}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="jakt">Jakt, Jaktprov</label>
		</div>
		<div>
		<input type="checkbox" id="tjänstehund" name="tjänstehund" value="tjänstehund"
		checked={this.state.interests.tjänstehund}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="tjänstehund">Tjänstehund</label>
		</div>
		<div>
		<input type="checkbox" id="viltspår" name="viltspår" value="viltspår"
		checked={this.state.interests.viltspår}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="viltspår">Viltspår</label>
		</div>
		<div>
		<input type="checkbox" id="rallylydnad" name="rallylydnad" value="rallylydnad"
		checked={this.state.interests.rallylydnad}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="rallylydnad">Rallylydnad, tävlingslydnad, bruksprov</label>
		</div>
		<div>
		<input type="checkbox" id="nosework" name="nosework" value="nosework"
		checked={this.state.interests.nosework}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="nosework">Nosework eller liknande</label>
		</div>
		<div>
		<input type="checkbox" id="agility" name="agility" value="agility"
		checked={this.state.interests.agility}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="agility">Agility, freestyle, heelwork eller liknande</label>
		</div>
		<div>
		<input type="checkbox" id="pedagogik" name="pedagogik" value="pedagogik"
		checked={this.state.interests.pedagogik}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="pedagogik">Hundassisterad pedagogik eller liknande</label>
		</div>
		<div>
		<input type="checkbox" id="annan" name="annan" value="annan"
		checked={this.state.interests.annan}
		onChange={this.handleCheckboxChange}/>
		<label className="checkboxlabel" for="annan">Annan hundaktivitet, berätta gärna vad</label>
		</div>



		
	</div>

	<div className="line"></div>


		<label for="presentation">
			Presentation om dig själv och dina tidigare erfarenheter.
			Motivera gärna varför du vill ha en hund från oss
		</label>
		<textarea id="presentation" name="presentation" placeholder="Skriv här"
		value={this.state.presentation} onChange={this.handleInputChange}></textarea>

		<Captcha key={this.state.captchaKey} onValidate={this.handleCaptchaValidation} />
        	<button id='knapp' type="submit">Skicka</button>

	</form>
</section>

<aside id="hundmedvalparaside" className="pictureaside">
	<img src={hundmedvalpar} alt="Hund med sina valpar" id="hundmedvalpar" className="bild"/>
</aside>

<aside id="valpihandaside" className="pictureaside">
	<img src={valpihand} alt="Valp i en hand" id="valpihand" className="bild"/>
</aside>

<aside id="utforskandevalpaside" className="pictureaside">
	<img src={utforskandevalp} alt="valp som går på en matta" id="utforskandevalp" className="bild"/>
</aside>

<aside id="sovandevalpaside" className="pictureaside">
	<img src={sovandevalp} alt="Valp som ligger och sover" id="sovandevalp" className="bild"/>
</aside>


</div>

		)
		
	}
}

export default Valpar;