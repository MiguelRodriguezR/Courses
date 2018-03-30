'use strict';

const express = require('express');
const app = express();

app.get('/',(req,res)=>res.end('<h1>hello express</h1>'))
  .get('/user/:id-:name',(req,res)=>{
    res.end(`${req.params.name}, Hello your id is ${req.params.id}`)
  })
  .get('/search',(req,res)=>{
    res.end(`${req.query.s}`)
  })
  .listen(3000,()=>console.log('init express at localhost:3000'))
