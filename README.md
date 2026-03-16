# 🎲 Random Fact API

A simple and fast **RESTful API** that provides interesting random facts.  
Built with **Node.js and Express**, this project demonstrates how to design and build a basic backend API that returns JSON responses.

This project includes endpoints to:
- Get all facts
- Get a random fact
- Get a fact by ID

---

## 🚀 Features

- 📚 Retrieve all facts
- 🎲 Get a random fact
- 🔎 Fetch fact by ID
- ⚡ Lightweight and fast API
- 🧩 Simple project structure
- 🛠 Built with Express.js

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript**
- **REST API**

---

## 📂 Project Structure


random-fact-api
│
├── data
│ └── facts.js
│
├── routes
│ └── facts.js
│
├── server.js
├── package.json
└── README.md


---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/random-fact-api.git
2. Navigate to the project folder
cd random-fact-api
3. Install dependencies
npm install
4. Start the server
node server.js

Server will run on:

http://localhost:5000

📡 API Endpoints
Get All Facts
GET /facts
Example Response:
[
  { "id": 1, "fact": "Honey never spoils." },
  { "id": 2, "fact": "Octopuses have three hearts." }
]


Get Random Fact
GET /facts/random
Example Response:
{
  "fact": "Sharks existed before trees."
}


Get Fact by ID
GET /facts/:id
Example:
GET /facts/5
Response:
{
  "id": 5,
  "fact": "A group of flamingos is called a flamboyance."
}