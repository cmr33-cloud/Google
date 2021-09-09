const express = require("express");
const app = express();
const cors = require("cors");
const { request } = require("express");
app.use(cors());
const port = 3000;
const fullResults = require('./data');

results = [
  {
    h: "Buy Board Games | Bestsellers, New Releases, Pre-Orders",
    a: "https://www.board-game.co.uk/category/board-games",
    tags: ["board", "game", "games"],
  },
  {
    h: "The best board games - find a new favorite in 2021",
    a: "https://www.gamesradar.com/uk/best-board-games/",
    tags: ["board", "game", "games"],
  },
  {
    h: "Board game - Wikipedia",
    a: "https://en.wikipedia.org/wiki/Board_game",
    tags: ["board", "game", "games"],
  },
  {
    h: "Family board games | Argos",
    a: "https://www.argos.co.uk/browse/toys/family-games/board-games/c:30423/",
    tags: ["board", "game", "games"],
  },
  {
    h: "Board Game Quest | Board Game Reviews, News and More",
    a: "https://www.boardgamequest.com",
    tags: ["board", "game", "games"],
  },
  {
    h: "Board Games | Delivery Within 3 Working Days | The Works",
    a: "https://www.theworks.co.uk/c/toys-and-games/board-games",
    tags: ["board", "game", "games"],
  },
  {
    h: "20 Awesome Board Games the Whole Family Will Love",
    a: "https://www.housebeautiful.com/lifestyle/fun-at-home/g31943396/best-board-games-families/",
    tags: ["board", "game", "games"],
  },
  {
    h: "Board Game Extras",
    a: "https://www.bgextras.co.uk/",
    tags: ["board", "game", "games"],
  },
  {
    h: "Board games | Waterstones",
    a: "https://www.waterstones.com/category/toys-games/games/board-games",
    tags: ["board", "game", "games"],
  },
  {
    h: "Browsing Board Game - Steam",
    a: "https://store.steampowered.com/tags/en/Board+Game",
    tags: ["board", "game", "games"],
  },
  {
    h: "Board Games | Full Range at Smyths Toys UK",
    a: "https://www.smythstoys.com/uk/en-gb/toys/games-puzzles-and-books/board-games/c/SM06010616",
    tags: ["board", "game", "games"],
  },
  {
    h: "Tea - Wikipedia",
    a: "https://en.wikipedia.org/wiki/Tea",
    tags: ["tea"],
  },
  {
    h: "Speciality Tea Blends | Loose Tea & Tea Bags - Whittard",
    a: "https://www.whittard.co.uk/tea",
    tags: ["tea"],
  },
  {
    h: "UK Tea & Infusions Association",
    a: "https://www.tea.co.uk/",
    tags: ["tea"],
  },
  {
    h: "Buy Twinings Tea, Gifts, Teaware and Treats Today ...",
    a: "https://twinings.co.uk/",
    tags: ["tea"],
  },
  {
    h: "Tea Palace - widest selection of the finest quality teas and ...",
    a: "https://www.teapalace.co.uk",
    tags: ["tea"],
  },
  {
    h: "Camellia's Tea House - Speciality Loose Leaf Teas & Tea Bags",
    a: "https://www.camelliasteahouse.com",
    tags: ["tea"],
  },
  {
    h: "Shop all Gift Packs - T2 Tea",
    a: "https://www.t2tea.com/en/uk/tea/",
    tags: ["tea"],
  },
  {
    h: "Good & Proper Tea: Buy Tea Online | Online Tea Shop",
    a: "https://www.goodandpropertea.com/",
    tags: ["tea"],
  },
  {
    h: "Afternoon Tea London | The Goring Luxury Hotel Belgravia",
    a: "https://www.thegoring.com/food-drink/afternoon-tea/",
    tags: ["tea"],
  },
  {
    h: "Best Teas Online - Buy Tea Online - Online Tea Shop ...",
    a: "https://www.teapigs.co.uk/",
    tags: ["tea"],
  },

  {
    h: "Scientist - Wikipedia",
    a: "https://en.wikipedia.org/wiki/Scientist",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "The 10 Greatest Scientists of All Time | Discover Magazine",
    a: "https://www.discovermagazine.com/the-sciences/the-10-greatest-scientists-of-all-time",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "10 types of scientist - The Science Council",
    a: "https://sciencecouncil.org/about-science/10-types-of-scientist/",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "The UK's 100 leading practising scientists - Times Higher ...",
    a: "https://www.timeshighereducation.com/news/the-uks-100-leading-practising-scientists/2010580.article",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "New Scientist | Science news and science articles from New ...",
    a: "https://www.newscientist.com",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "Science | AAAS",
    a: "https://www.science.org/",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "Science Museum: Home",
    a: "https://www.sciencemuseum.org.uk/home",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "ScienceDirect.com | Science, health and medical journals, full ...",
    a: "https://www.sciencedirect.com",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "Science Europe",
    a: "https://www.scienceeurope.org",
    tags: ["science", "scientist", "scientists"],
  },

  {
    h: "Science | The Guardian",
    a: "https://www.newscientist.com",
    tags: ["science", "scientist", "scientists"],
  }

];


app.get("/", (req, res) => res.send("Hello World"));

app.get("/results/search", (req, res) => {
  let queries = Object.values(req.query)
  var requested = [];
  for (let a of results) {
    for (let b of queries) {
      if (a.tags.includes(b) && !requested.includes(a)) {
        requested.push(a);
      }
    }
  }
  res.json(requested);
});

app.get("/results", (req, res) => {
  const headlines = results.map((story) => story.headline);
  res.send(headlines);
});

app.get("/boogley", (req, res) => {
  console.log(req.query);
  res.send(Object.values(req.query));
});

// To do: Get the server running
app.listen(port, () => {
  console.log(`Server is up and running at localhost:${port}`);
});
function getRandomArticle () { 
    let randNumber = Math.floor(Math.random()*fullResults.length)
    newStory = fullResults[randNumber]
    return newStory
  }

app.get('/', (req, res) => res.send('Hello World'))

app.get('/results', (req, res) => {
    res.send(fullResults)
    // const headlines = fullResults.map(story => story.headline); 
    // res.send(headlines)
    }
)

app.get('/results/headlines', (req, res) => {
    const headlines = fullResults.map(story => story.headline); 
    res.send(headlines)
    }
)


app.get('/results/random', (req,res) => {
    res.send(getRandomArticle())

})

// app.post('/results', (req,res) => {

// })

