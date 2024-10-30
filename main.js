let quote = document.querySelector("span");
let person = document.querySelector("strong");
let btn = document.querySelector("button");

const apiUrl = `https://quotes-api-self.vercel.app/quote`;

btn.addEventListener("click", getQuote);

async function getQuote() {
  const data = await fetch(apiUrl);

  const result = await data.json();
  quote.innerText = result.quote;
  person.innerText = result.author;
}
