const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my over won Smarty Smarty Pant!!");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0170000000" },
  { id: 2, name: "nabana", email: "nabana@gmail.com", phone: "01788888888" },
  { id: 3, name: "khabana", email: "khabana@gmail.com", phone: "01733333333" },
  { id: 4, name: "jabana", email: "jabana@gmail.com", phone: "01711111111" },
  { id: 5, name: "pabana", email: "pabana@gmail.com", phone: "01722222222" },
  { id: 6, name: "mabana", email: "mabana@gmail.com", phone: "01766666565" },
  { id: 7, name: "labana", email: "labana@gmail.com", phone: "01777777777" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const use = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour soud fazle flavor");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
