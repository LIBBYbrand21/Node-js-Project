const express=require('express');
require('dotenv').config();

const logger=require('./middlewares/logger');
const donates=require('./routes/Donates');

const app=express();
const port=process.env.PORT||3000;

app.use(logger('start'));
app.use(express.json());

app.use('/api/donates', donates);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something break!')
})

app.listen(port,()=>{
    console.log(`I am up in http://127.0.0.1:${port}`);
})