let quote = document.querySelector('span');
let person = document.querySelector('strong');
let btn = document.querySelector('button');

<<<<<<< HEAD
const apiUrl = `https://api.quotable.io/random?tags=technology,famous-quotes`;

btn.addEventListener('click', getQuote);
=======

>>>>>>> 5bfa814d5f3a536e079d5a786f01a9378abf7f27

async function getQuote(){
  const data = await fetch(apiUrl)
  const result = await data.json()
  quote.innerText = result.content
  person.innerText = result.author
  
} 

<<<<<<< HEAD
=======
   
})
>>>>>>> 5bfa814d5f3a536e079d5a786f01a9378abf7f27
