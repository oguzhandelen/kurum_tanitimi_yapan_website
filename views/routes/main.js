const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('site/index.handlebars')
})
router.get('/about', (req, res)=>{
    res.render('site/about.handlebars')
})
router.get('/portfolio', (req, res)=>{
    res.render('site/portfolio.handlebars')
})
router.get('/contact', (req, res)=>{
    res.render('site/contact.handlebars')
})
router.get('/services', (req, res)=>{
    res.render('site/services.handlebars')
})
router.get('/telephone', (req, res)=>{
    res.render('site/telephone.handlebars')
})
router.get('/mail', (req, res)=>{
    res.render('site/mail.handlebars')
})
module.exports = router