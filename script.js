const QUOTES_DATA = [
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
  },
  {
    text: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius",
  },
  {
    text: "You have power over your mind - not outside events. Realise this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    text: "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus",
  },
  {
    text: "Just that you do the right thing. The rest doesn't matter. Cold or warm. Tired or well-rested. Despised or honoured.",
    author: "Marcus Aurelius",
  },
  {
    text: "The more we value things outside our control, the less control we have.",
    author: "Marcus Aurelius",
  },
  {
    text: "Conceal a flaw, and the world will imagine the worst",
    author: "Marcus Aurelius",
  },
  {
    text: "Settle on the type of person you want to be and stick to it, whether alone or in company.",
    author: "Marcus Aurelius",
  },
  {
    text: "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus",
  },
  {
    text: "You could leave life right now. Let that determine what you do and say and think.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don't be overheard complaining. Not even to yourself.",
    author: "Marcus Aurelius",
  },
  { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
];

const newQuoteBtn = document.querySelector("button");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");

const lastFiveQuoteIndexes = [];

function generateNewQuote() {
  let quoteIndex;
  while (true) {
    quoteIndex = getRandomQuoteIndex();
    if (!lastFiveQuoteIndexes.includes(quoteIndex)) break;
  }

  const selectedQuote = QUOTES_DATA[quoteIndex];
  quoteText.textContent = selectedQuote.text;
  authorText.textContent = `- ${selectedQuote.author}`;
}

function getRandomQuoteIndex() {
  return Math.floor(Math.random() * QUOTES_DATA.length);
}

generateNewQuote();
newQuoteBtn.addEventListener("click", generateNewQuote);
