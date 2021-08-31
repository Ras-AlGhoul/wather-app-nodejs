const express = require('express');
const router = express.Router();

router.get('', (req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Yazan Abbas'
    });
});

router.get('/about', (req,res)=>{
    res.render('about',{
        title:'About Page',
        name:'Yazan Abbas'
    });
});

router.get('/help', (req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Yazan Abbas'
    });
});
router.get('/help/*', (req,res)=>{
    res.render('404',{
        title:'404',
        error:'Article not found',
        name:'Yazan Abbas'
    });
});
router.get('*', (req,res)=>{
    res.render('404',{
        title: "404 Page",
        error:'Page not Found',
        name:'Yazan Abbas'
    });
});
router.get('/weather', (req, res) => {
    res.send('WEATHER APPLICATION');
});





module.exports = router;