require('dotenv').config();
const express = require('express');
const app = express();

const ip = require('ip').address();
const routers = require('./routes');
const port = process.env.PORT || 3030;

app.use(routers)
app.use(express.json())

const protocol = process.env.PROTOCOL || 'http';
app.listen(port, () => {
    console.log(`Servidor na porta ${port} or ${protocol}://${ip}:${port}`);
})