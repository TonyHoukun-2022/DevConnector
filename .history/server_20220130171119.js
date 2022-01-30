const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('API Running'))

//look for PORT variable in environment when deployed on Heroku || local port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))