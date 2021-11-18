const express = require('express');
const app = express();
const expressLayouts = require ('express-ejs-layouts');
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app);
// const methodOverride = require('method-override');
// const listItemRoutes = require('./routes/listitemRoutes')
const userRoutes = require('./routes/userRoutes');

app.use(express.json())

// Set default view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Mount middleware 
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use('/listItem', listItemRoutes)
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    console.log('hitting');
    res.render('welcome');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
 });
