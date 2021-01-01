const path = require('path');
const express = require('express');

// ROUTES
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// TEMPLATING ENGINE
app.set('view engine', 'pug');
app.set('views', 'views');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
