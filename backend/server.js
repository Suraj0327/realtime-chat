const express = require("express");
const users = require("./data/data");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send("API is running");
});

app.get("/api/chat", (req, res) => {
    res.send(users);
});

app.get("/api/chat/:id", (req, res) => {
    const chatId = Number(req.params.id);
    const singleChat = users.find((c) => c.id === chatId);
    res.send(singleChat);
});
const PORT=process.env.PORT ||5000;
app.listen(PORT, () => 
    console.log('Server is running successfully ON ${PORT}')
);
