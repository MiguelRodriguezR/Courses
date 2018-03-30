'use strict';

const express = require('express');
const app = express();

app.get('/',(req,res)=>res.sendFile(__dirname+'/index.html'))
  .listen(3000,()=>console.log('init express at localhost:3000'))
