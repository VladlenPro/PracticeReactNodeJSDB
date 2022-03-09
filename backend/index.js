const express = require('express');
const cors = require("cors");
const app = express();
const players = require("./router/players");


app.use(cors());
app.use(express.json());

app.use("/api/players", players);

const port = process.env.PORT || 7735;

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
})