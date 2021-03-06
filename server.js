const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
