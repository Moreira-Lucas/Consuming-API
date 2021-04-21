const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');
app.use(cors());

app.get('/' ,async (req,res)=>{

  //desestruturando a response.data que o axios buscou na url
  const { data } = await axios('https://jsonplaceholder.typicode.com/users/');
  console.log(data);
  
  return res.json(data)
})


app.listen('2323');