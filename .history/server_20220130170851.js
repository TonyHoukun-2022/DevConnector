const express = require('express')

const app = express()

//look for PORT variable in environment when deployed on Heroku
const PORT = process.env.PORT || 