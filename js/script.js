/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'You met me at a very strange time in my life.',
    source: 'Narrator',
    citation: 'Fight Club',
    year: '1999',
    category: 'drama / thriller'
  },
  {
    quote: 'Did I listen to pop music because I was miserable? Or was I miserable because I listened to pop music?',
    source: 'Rob Gordon',
    citation: 'High Fidelity',
    year: '1999',
    category: 'comedy / romance'
  },
  {
    quote: "I wish I could say something classy and inspirational, but that just wouldn't be our style.Pain heals. Chicks dig scars. Glory lasts forever.",
    source: 'Shane Falco',
    citation: 'The Replacements',
    year: '2000',
    category: 'comedy / sport'
  },
  {
    quote: 'Love is stupid monkeys dancing in a slapstick hurricane.',
    source: 'Wallace',
    citation: 'What If',
    year: '2013',
    category: 'comedy / romance'
  },
  {
    quote: "Hey now, if you were happy every day of your life, you wouldn't be a human being. You'd be a game show host.",
    source: 'Veronica',
    citation: 'Heathers',
    year: '1989',
    category: 'comedy / crime'
  },
  {
    quote: "But You have to try, because if you haven't tried, you haven't lived...Stay open, who knows? Lightning could strike.",
    source: 'William Parrish',
    citation: 'Meet Joe Black',
    year: '1998',
    category: 'drama / romance'
  },
  {
    quote: "Nobody thinks it will work, do they? No. You just described every great success story.",
    source: 'Diane Court, Lloyd Dobler',
    citation: 'Say Anything',
    year: '1989',
    category: 'comedy / drama / romance'
  },
  {
    quote: "I just slid my ticket across the table and said, 'Sorry, guys. I gotta see about a girl.'",
    source: 'Sean Maguire',
    citation: 'Good Will Hunting',
    year: '1997',
    category: 'drama / romance'
  },
  {
    quote: "People ask me, will I remember them if I make it?  I tell them, will you remember me if I don't?",
    source: 'William Gates',
    citation: 'Hoop Dreams',
    year: '1994',
    category: 'documentary / sport'
  },
  {
    quote: "The only true currency in this bankrupt world is what you share with someone else when you're uncool.",
    source: 'Lester Barry',
    citation: 'Almost Famous',
    year: '2000',
    category: 'comedy / drama'
  },
  {
    quote: "Maybe that's all family really is. A group of people that miss the same imaginary place.",
    source: 'Andrew Largeman',
    citation: 'Garden State',
    year: '2004',
    category: 'comedy / drama / romance'
  },
  {
    quote: "I'm the guy who does his job. You must be the other guy.",
    source: 'Sgt. Sean Dignam',
    citation: 'The Departed',
    year: '2006',
    category: 'crime / thriller'
  },
  {
    quote: "And you're listening to that song on that drive with the people you love most in this world. And in this moment, I swear, we are infinite.",
    source: 'Charlie',
    citation: 'Perks of Being a Wallflower',
    year: '2012',
    category: 'drama / romance'
  },
];

// background colors array
const colors = ['#3659A2', '#368FA2', '#36A27F', '#6E859C', '#033F90', '#038690', '#3E474F'];


/***
 * `getRandomQuote` function
***/

// randomly chooses a quote object from the array, returns that quote object
function getRandomQuote ( arr ) {
  let randomQuote = arr[ Math.floor( Math.random() * arr.length ) ];
  return randomQuote;
}


/***
 * `getRandomColor` function
***/

// randomly chooses a color from the array, returns that color
function getRandomColor ( arr ) {
  let randomColor = arr[ Math.floor( Math.random() * arr.length ) ];
  return randomColor;
}


/***
 * `printQuote` function
***/

const quoteBox = document.getElementById('quote-box');

function printQuote () {
  // gets random quote object from the quotes array
  let randomQuote = getRandomQuote(quotes);

  // variable to store HTML markup for quote box
  let quoteHTML = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source} </p>
  `;

  // if quote object contains both citation and year properties, include them in the HTML markup
  if ( randomQuote.citation && randomQuote.year && randomQuote.category ) {
    quoteHTML = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation} (${randomQuote.category})</span>
        <span class="year">${randomQuote.year}</span>
      </p>
    `;
  } else if ( randomQuote.year ) {
    // if quote object only contains year property, include it in the HTML markup
    quoteHTML = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="year">${randomQuote.year}</span>
      </p>
    `;
  } else if ( randomQuote.citation ) {
    // if quote object only contains citation property, include it in the HTML markup
    quoteHTML = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
      </p>
    `;
  } else if ( randomQuote.category ) {
    // if quote object only contains citation property, include it in the HTML markup
    quoteHTML = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation} (${randomQuote.category})</span>
      </p>
    `;
  }

  // sets quote box HTML to include random quote object properties
  quoteBox.innerHTML = quoteHTML;

  // gets a random color from the colors array and apply it to the body
  let randomColor = getRandomColor(colors);
  document.getElementById('body').style.backgroundColor = randomColor;
}

// adds quote to screen on page load
printQuote();

// automatically generates a new quote and background color at a set interval of time
let timeInt;

function autoChange(func){
  timeInt = setInterval(func, 10000);
};

autoChange(printQuote);



/***
 * click event listener for the print quote button
***/

// generates a new quote and background color each time the show another quote button is clicked
document.getElementById('load-quote').addEventListener("click", (e) => { 
  clearInterval(timeInt); // reset auto change time interval on click
  printQuote(); // add random quote to the page
  autoChange(printQuote); // add time interval to generate new quote
});