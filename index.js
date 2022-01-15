const { randomStudent } = require("./students");
const { logBlue } = require("./utils");
const cowsay = require("cowsay");
const say = require("say");

// Normal NodeJS script, without server
/* const student = randomStudent();

logBlue(
  cowsay.say({
    text: student,
    e: "oO",
    T: "U ",
  })
);
say.speak(student); */

// HTTP Server 💩
/* const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/ping":
      if (req.method === "GET") {
        res.write("Pong");
      } else {
        res.statusCode = 403;
        res.write("Method not supported bb :c");
      }
      break;
    case "/carol":
      res.write("Ola k ase este e el perfil de Karol");
      break;
    default:
      res.write("No te entiendo loko :c");
  }

  console.log(`${req.method} ${req.url} -> ${res.statusCode}`);

  res.end();
});

server.listen(3000); */

// Express 🌟
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/carol", (req, res) => {
  console.log("Esto se ejecuta en la terminal");
  res.sendFile(__dirname + "/views/carol.html");
});

app.get("/marquito", (req, res) => {
  res.sendFile(__dirname + "/views/marquito.html");
});

app.post("/carol", (req, res) => {
  res.status(403).send("Oye noh puedeh asé eso");
});

// Default route
app.use((req, res) => {
  res.status(404).send("Not found wey");
});

app.listen(3001, () => {
  console.log("Listening on port 3000 🚀");
});
