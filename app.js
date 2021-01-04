const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./util/database');

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

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
  })
  .catch((err) => console.log(err));
