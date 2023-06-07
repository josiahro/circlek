const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/Assets/codes"));

app.get("/redeem", (req, res) => {
    res.sendFile(__dirname + "/public/redeem.html");
})

app.get("/redeemed", (req, res) => {
    res.sendFile(__dirname + "/public/redeemed.html")
});

app.get("/arizona", (req, res) => {
    res.sendFile(__dirname + "/public/arizona.html")
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})