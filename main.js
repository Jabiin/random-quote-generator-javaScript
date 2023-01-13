let quote = document.querySelector('span');
let person = document.querySelector('strong');
let btn = document.querySelector('button');


let quotes = [{
    quote: '"The way to get started is to quit talking and begin doing."',
    person: 'Walt Disney'
},
{
    quote: '"If life were predictable it would cease to be life, and be without flavor."',
    person: 'Eleanor Roosevelt'
},
{
    quote: '"Life is what happens when you are busy making other plans"',
    person: 'John Lennon'
},
{
    quote: '"Whoever is happy will make others happy too"',
    person: 'Anne Frank'
}]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})