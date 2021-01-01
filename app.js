const path = require('path');
const express = require('express');

// ROUTES
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// TEMPLATING ENGINE
app.set('view engine', 'pug');
app.set('views', 'views');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render('404', { docTitle: '404 not found!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
