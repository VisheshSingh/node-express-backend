const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const mongoConnect = require('./util/database').mongoConnect;

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

app.use((req, res, next) => {
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const PORT = process.env.PORT || 5000;

mongoConnect(() => {
  app.listen(PORT);
});
