let count = 0;
let word = document.getElementById('evaluatedText');
let wordCount = document.getElementById('wordCount');
word.innerText = count;

word.addEventListener('input',(event)=>{
	let str = event.target.value.trim().split(' ');
	count = str.length;
	wordCount.innerText = count;
	
})