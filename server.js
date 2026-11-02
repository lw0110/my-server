
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware: Parse JSON request body
app.use(express.json());

// Health check
app.get('/webhook', (req, res) => {
    let body = req.body
    console.log(`get response ${JSON.stringify(body, null, 2)}`)
    res.json({
        status: 'UP',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

