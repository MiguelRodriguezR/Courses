'use strict';

const express = require('express');
const app = express();

app.get('/',(req,res)=>res.end('<h1>hello express</h1>'))
  .get('/user/:id-:name',(req,res)=>{
    res.send(`${req.params.name}, Hello your id is ${req.params.id}`)
  })
  .get('/google',(req,res)=>{
    res.redirect(301,'http://www.google.com');
  })
  .get('/json',(req,res)=>{
    res.json({
      name:"miguel",
      age:20
    })
  })
  .get('/render',(req,res)=>{
    res.render(__dirname+'index.html')
  })
  .listen(3000,()=>console.log('init express at localhost:3000'))
