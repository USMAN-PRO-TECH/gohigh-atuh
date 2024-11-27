
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Environment variables
const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.CLIENT_ID; // Replace with your Client ID
const CLIENT_SECRET = process.env.CLIENT_SECRET; // Replace with your Client Secret
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:3000/oauth/callback'; // Replace with your Redirect URI
const AUTH_URL = 'https://api.gohighlevel.com/oauth/authorize';
const TOKEN_URL = 'https://api.gohighlevel.com/oauth/token';
const API_URL = 'https://api.gohighlevel.com/v1'; // Example API endpoint




  


app.get('/initiate', require('./lib/initiate'));

app.get('/refresh', require('./lib/refresh'));

app.get('/oauth/callback', require('./lib/callback'));
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
