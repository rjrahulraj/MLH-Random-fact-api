const express = require("express");
const cors = require("cors");
const facts = require("./data/facts");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/*
GET /facts
Return all facts
*/
app.get("/facts", (req, res) => {
  res.json(facts);
});

/*
GET /facts/random
Return random fact
*/
app.get("/facts/random", (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.json({ fact: randomFact.fact });
});

/*
GET /facts/:id
Return fact by ID
*/
app.get("/facts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const fact = facts.find((f) => f.id === id);

  if (!fact) {
    return res.status(404).json({
      message: "Fact not found",
    });
  }

  res.json(fact);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
