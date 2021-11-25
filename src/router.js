const express = require('express');
const router = express.Router();
const forecast = require('./utils/forecast');
const geocode = require('./utils/geacode');

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
router.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.render('404', {
            error:'You must provide a valid address'
        })
    }
   geocode(req.query.address, (error, {latitude,longitude}={})=>{
       if(error){
           return res.send(404, { error })
       }
       forecast(latitude, longitude, (error, forecastData)=>{
           if(error){
               return res.render('404',{ error })
           }
           res.send({ forecastData  });
       })
   })

});
router.get('*', (req,res)=>{
    res.render('404',{
        title: '404 Page',
        error:'Page not Found',
        name:'Yazan Abbas'
    });
});

module.exports = router;
