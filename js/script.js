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

const quotes = [
  {
    quote: 'You met me at a very strange time in my life.',
    source: 'Narrator',
    citation: 'Fight Club',
    year: '1999'
  },
  {
    quote: 'Did I listen to pop music because I was miserable? Or was I miserable because I listened to pop music?',
    source: 'Rob Gordon',
    citation: 'High Fidelity',
    year: '1999'
  },
  {
    quote: 'Pain heals. Chicks dig scars. Glory lasts forever.',
    source: 'Shane Falco',
    citation: 'The Replacements',
    year: '2000'
  },
  {
    quote: 'Love is stupid monkeys dancing in a slapstick hurricane.',
    source: 'Wallace',
    citation: 'What If',
    year: '2013'
  },
  {
    quote: "Hey now, if you were happy every day of your life, you wouldn't be a human being. You'd be a game show host.",
    source: 'Veronica',
    citation: 'Heathers',
    year: '1989'
  },
  {
    quote: "But You have to try, because if you haven't tried, you haven't lived...Stay open, who knows? Lightning could strike.",
    source: 'William Parrish',
    citation: 'Meet Joe Black',
    year: '1998'
  },
  {
    quote: "Nobody thinks it will work, do they? No. You just described every great success story.",
    source: 'Diane Court, Lloyd Dobler',
    citation: 'Say Anything',
    year: '1989'
  },
  {
    quote: "I just slid my ticket across the table and said, 'Sorry, guys. I gotta see about a girl.'",
    source: 'Sean Maguire',
    citation: 'Good Will Hunting',
    year: '1997'
  },
  {
    quote: "We're all told at some point in time that we can no longer play the children's game, we just don't...don't know when that's gonna be. Some of us are told at eighteen, some of us are told at forty, but we're all told.",
    source: 'Scout Barry',
    citation: 'Moneyball',
    year: '2011'
  },
  {
    quote: "The only true currency in this bankrupt world is what you share with someone else when you're uncool.",
    source: 'Lester Barry',
    citation: 'Almost Famous',
    year: '2000'
  },
  {
    quote: "Maybe that's all family really is. A group of people that miss the same imaginary place.",
    source: 'Andrew Largeman',
    citation: 'Garden State',
    year: '2004'
  },
  {
    quote: "I'm the guy who does his job. You must be the other guy.",
    source: 'Sgt. Sean Dignam',
    citation: 'The Departed',
    year: '2006'
  },
];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);