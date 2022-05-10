const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
});