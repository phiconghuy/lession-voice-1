const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = [
	'i go to swim',
	'i go to shopping',
	'i want go to hiking'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = function(){
	console.log('hello')
}
recognition.onresult = function(event){
	var current = event.resultIndex
	var transcript = event.results[current][0].transcript
	content.textContent = transcript

	readOutLoud(transcript);
}
btn.addEventListener('click',() => {
	recognition.start()
})
function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance()

	speech.text = 'i dont know what you said';
	if(message.includes('how are you')){
		const finalText = greetings[Math.floor(Math.random() * greetings.length)]
		speech.text = finalText
	}
	speech.volumn = 1
	speech.rate = 1
	speech.pitch = 1

	window.speechSynthesis.speak(speech)
}
/** add 1 comment  */