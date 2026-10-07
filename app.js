const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from CI/CD Demo Application!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}
