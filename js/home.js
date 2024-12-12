var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "Mark Twain",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "Ralph Waldo Emerson",
  },
];

var lastNumber;
var displayedNumber=[];
function displayQuotes() {
    if(displayedNumber.length == quotes.length){
        displayedNumber=[];
    }
  do {
    var numberOfQuote = Math.floor(Math.random() * quotes.length);
  } while (numberOfQuote == lastNumber || displayedNumber.includes(numberOfQuote));

  lastNumber = numberOfQuote;
  displayedNumber.push(numberOfQuote);
  console.log(numberOfQuote);
  document.getElementById("quote").innerHTML = quotes[numberOfQuote].quote;
  document.getElementById("author").innerHTML = quotes[numberOfQuote].author;
}
// typed liberary for typing animation