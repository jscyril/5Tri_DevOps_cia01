const express = require("express");

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
