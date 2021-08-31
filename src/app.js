const path = require('path');
const express = require('express');
const router = require('./router');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// const public = path.join(__dirname,'../public');
//no need for this if the templates folder called views 
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');
//set up static directory to Serve
app.use(express.static('public'));
//set up handelbars and view engines
app.set('view engine','hbs'); 
app.set('views', viewsPath);//no need for this if the templates folder called views
hbs.registerPartials(partialPath);
app.use(router);

app.listen(port, ()=>{
    console.log('listening on port '+ port)
});