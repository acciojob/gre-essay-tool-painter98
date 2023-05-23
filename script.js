let count = 0;
let word = document.getElementById('evaluatedText');
let wordCount = document.getElementById('wordCount');

word.addEventListener('input',(event)=>{
	let str = event.target.value.trim().split(' ');
 // console.log(str);
  if(event.target.value==="") count=0;
  else count = str.length;
	wordCount.innerText = count;
})