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
router.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.render('404', {
            error:'You must provide a valid address'
        })
    }
    console.log(req.query.address);
    res.send({
        address:'Stockholm',
        forecast: 'its currently sunny with no chance of rain and tempreture is 19 c'
    });
});
router.get('*', (req,res)=>{
    res.render('404',{
        title: '404 Page',
        error:'Page not Found',
        name:'Yazan Abbas'
    });
});





module.exports = router;