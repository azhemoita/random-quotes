const quotes = [
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
  {
    quote: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote: 'Get busy living or get busy dying.',
    author: 'Stephen King',
  },
  // Add more quotes as needed
];

// Selecting the necessary elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Function to generate a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}"`;
  authorText.textContent = `- ${randomQuote.author}`;
}

// Event listener for the button
newQuoteButton.addEventListener('click', getRandomQuote);

// async function fetchQuote() {
//   try {
//     const response = await fetch('https://api.quotable.io/random');
//     const data = await response.json();
//     quoteText.textContent = `"${data.content}"`;
//     authorText.textContent = `- ${data.author}`;
//   } catch (error) {
//     quoteText.textContent = 'Oops! Could not fetch a quote.';
//     authorText.textContent = '';
//   }
// }

// newQuoteButton.addEventListener('click', fetchQuote);
