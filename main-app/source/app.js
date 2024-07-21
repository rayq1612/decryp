
const express = require('express');
const hbs = require('hbs')
const path = require('path')
const request = require('axios')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', function (req, res) {
    res.render('index', (req, res) => {
        
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
    console.log(__dirname)
})
