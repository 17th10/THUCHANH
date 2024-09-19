import express from 'express';
import dotenv from 'dotenv/config'
import date from "./date";
import getURL from "./getURL";
import viewEngine from './viewEngine';
const app = express()
viewEngine(app)
const port = process.env.PORT
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
    // res.send('Hello World!. Page  about ')
})

app.get('/date', (req, res) => {
    res.writeHead(200, {
        'Content-Type':
            'text/html;charset=utf-8'
    });
    res.write(date() + "<br>");
    res.end();
})
app.get('/geturl', (req, res) => {
    res.writeHead(200, {
        'Content-Type':
            'text/html;charset=utf-8'
    });
    res.write(getURL.getPath(req) + "</br>");
    res.write(getURL.getParamsURL(req) + "</br>");
    res.end();
})
app.get('/ejs', (req, res) => {
    res.render('test')
})
app.listen(port, () => {
    console.log(` Example app listening  on port ${port}`)
})
