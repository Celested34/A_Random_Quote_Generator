/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// I created an array with 5 objects. Each object has 2-4 properties
const quotes = [
 {
  quote: "Be yourself; everyone else is already taken.",
  source: "Oscar Wilde",
  citation: "Goodreads",
  year: 1854
},
{
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  source: "Albert Einstein"
},
{
  quote: "So many books, so little time",
  source: "Frank Zappa"
},
{
  quote: "A room without books is like a body without a soul.",
  source: "Marcus Tullius Cicero"
},
{
  quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  source: "Bernard M. Baruch"
}
];




/***
 * `getRandomQuote` function
***/

//use the random 
function getRandomQuote() {
  //create the variable randomQuote to store a random or in this case a random quote
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}




/***
 * `printQuote` function
***/


function printQuote(){
// calling the function
let randomQuote = getRandomQuote ();
//use a template literal replace to embed all the different quotes
let html = `
<p class="quote"> ${randomQuote.quote} </p>
<p class="source"> ${randomQuote.source} 
`;
//use if expressions for the properties that are present in some and not all 
if (randomQuote.citation){
  html+= ` 
  <span class="citation"> ${randomQuote.citation} </span>
  `;
}

if (randomQuote.year){
  html += `
  <span class="year"> ${randomQuote.year} </span>
  `;
}

html += `</p>`;

document.getElementById('quote-box').innerHTML = html; 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);