const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/minorInsults", (req, res) => {
  const minorInsults = ["Your hair looks small.",
					 "You drive like a grandma",
					 "You're like a grey sprinkle on a rainbow cupcake.",
  ];

  // choose random insult
  let randomIndex = Math.floor(Math.random() * minorInsults.length);
  let randomInsults = minorInsults[randomIndex];

  res.status(200).send(randomInsults);
  
});

//new game recommendation, except its mostly Elden Ring with two other recommendations lol

app.get("/api/games", (req, res) => {
  const games = ["Elden Ring",
            "Elden Ring, again",
            "Guess what! Elden Ring again, scrub.",
            "Super Smash Brothers Melee",
            "Fine, you should play DOOM: ETERNAL"
          ];

  let randomIndex = Math.floor(Math.random() * games.length);
  let randomGame = games[randomIndex];

  res.status(200).send(randomGame)
});

app.get("/api/fortunes", (req, res) => {
    const fortunes = ["Jealousy doesn't open doors, it closes them!",
            "Fortune favors the brave.",
            "A dream you have will come true.",
            "Never give up, you're not a failure if you don't give up.",
            "Adversity is the parent of virtue."];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
});


app.listen(4000, () => console.log("Server running on 4000"));
