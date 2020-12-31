const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
