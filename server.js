const express = require("express");
const app = express();

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static("public"));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
app.get("/api/test", (req, res) => {
    res.json({ message: "This is the backend responding!" });
});
