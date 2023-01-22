let quote = document.querySelector('span');
let person = document.querySelector('strong');
let btn = document.querySelector('button');


let quotes = [{
    quote: '"The way to get started is to quit talking and begin doing."',
    person: `~Walt Disney`
},
{
    quote: '"If life were predictable it would cease to be life, and be without flavor."',
    person: `~Eleanor Roosevelt`
},
{
    quote: '"Life is what happens when you are busy making other plans"',
    person: `~John Lennon`
},
{
    quote: '"Whoever is happy will make others happy too"',
    person: `~Anne Frank`
},
{
    quote: `"Get busy living or get busy dying."`,
    person: `~Stephen King`
},
{
    quote: `"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."`,
    person: `~Henry Ford`
},
{
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    person: `~Soren Kierkegaard`
},
{
    quote: `"Turn your wounds into wisdom."`,
    person: `~Oprah Winfrey`
}
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})