const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let queries = [];

app.get("/", (req, res) => {
    res.send("API is running");
});

app.post("/queries", (req, res) => {
    const { queryText } = req.body;

    const newQuery = { 
        id: Date.now(),
        queryText 
    };

    queries.push(newQuery);

    res.json({ success: true, data: newQuery });
});

app.get("/queries", (req, res) => {
    res.json(queries);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("🚀 Server running on port " + PORT));
