const path = require('path');
const express = require('express');

const db = require('./util/database');

// ROUTES
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errorController');

const app = express();

// TEMPLATING ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

db.execute('SELECT* FROM products')
  .then((result) => console.log(result[0]))
  .catch((err) => console.log(err));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
