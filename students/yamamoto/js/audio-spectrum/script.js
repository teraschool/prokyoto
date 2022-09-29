const f = document.querySelector("#file-input"); 
const c = document.querySelector("#render");
const g = c.getContext("2d");

let audio = null;
let audioSource = null;

f.addEventListener("change", async (event) => {	
	await loadMusic(event.target.files[0]); 
});

window.addEventListener("keypress", (event) => {
	if(event.keyCode == 13){ // if pressed key was enter key
		f.click(); //Open the file chooser
	}
});

window.addEventListener("resize", (event) => {
	window.requestAnimationFrame(autosize);
});

window.addEventListener("load", () => {
	autosize();
});

function autosize(){
	c.width = window.innerWidth;
	c.height = window.innerHeight;

	g.clearRect(0, 0, c.width, c.height); 
	if(!audio){ 
		g.fillStyle = "#fff";
		g.font = "32px Ubuntu Mono, monospace";
		g.textAlign = "center";
		g.textBaseline = "middle";
		g.fillText("Press Enter to choose a music.", c.width / 2, c.height / 2);
		return;
	}
}

async function loadMusic(file){
	const audioContext = new AudioContext();
	const analyserNode = audioContext.createAnalyser();
	const gainNode = audioContext.createGain();
	
	if(audio){
		audio.pause();
		audio.src = '';
	}
	
	if(audioSource){
		audioSource.disconnect();
	}
	
	analyserNode.fftSize = 2048;
	if(file){
		
		audio = new Audio();
		audio.src = await convertAudioFileToDataUrl(file);
		
		audioSource = audioContext.createMediaElementSource(audio);
		
		audioSource.connect(gainNode).connect(analyserNode).connect(audioContext.destination);
		
		let s, t, spectrum;
		spectrum = new Uint8Array(analyserNode.frequencyBinCount);
		s = performance.now();
		(function (){
			t = (performance.now() - s) / 1000;
			analyserNode.getByteFrequencyData(spectrum);
			gainNode.gain.value = (t > 5 ? 0.15 : 0.15 * Math.sin(t/5*Math.PI/2));
			render(t, spectrum);
				window.requestAnimationFrame(arguments.callee);
		})();
		
		gainNode.gain.value = 0.0;
		audio.play();
	}
}

async function convertAudioFileToDataUrl(file){
	const reader = new FileReader();
	
	const loadPromise = new Promise((resolve, reject) => {
		reader.onload = (event) => {
			resolve(event.target.result);
		};
	});
	
	reader.readAsDataURL(file);
	
	return loadPromise;
}