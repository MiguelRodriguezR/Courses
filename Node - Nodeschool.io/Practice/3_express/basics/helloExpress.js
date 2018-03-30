'use strict';

const express = require('express');
const app = express();

app.get('/',(req,res)=>res.end('<h1>hello express</h1>'))
  .listen(3000,()=>console.log('init express at localhost:3000'))
