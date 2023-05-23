//your code here
let count = 0;
let word = document.getElementById('evaluatedText');
let wordCount = document.getElementById('wordCount');

word.addEventListener('keyup',(event)=>{
	if(event.code == 'Space') {
		count++;
		wordCount.innerText = count;
	}
})