const express = require('express')
const app = express();
const expressLayouts = require ('express-ejs-layouts');
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app)
const userRoutes = require('./routes/userRoutes')
// const listItemRoutes = require('./routes/listitemRoutes')

app.use(express.json())

// set default view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static("public"));

// mount middleware 
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use('/listItem', listItemRoutes)
app.use('/user', userRoutes)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
 })
