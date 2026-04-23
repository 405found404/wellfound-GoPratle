const express = require('express');
const path = require('path');
const app = express();

// Hardcoding the port to 8080 for staging. 
// (When you push to production, you can change this or map it via Docker)
const PORT = 8080; 

// Serve the static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// Any other route will redirect back to your React app's index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});