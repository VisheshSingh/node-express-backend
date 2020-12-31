const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Forward the control to the next middleware
});
app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from express.js</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
