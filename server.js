const express=require('express');
require('dotenv').config();

const logger=require('./middlewares/logger');
const donates=require('./routes/Donates');
const donors=require('./routes/Donors');
const groups=require('./routes/Groups');
const campains = require('./routes/Campains');

const app=express();
const port=process.env.PORT || 3000;

app.use(logger('start'));
app.use(express.json());

app.use('/api/donates', donates);
app.use('/api/donors', donors);
app.use('/api/groups', groups);
app.use('/api/campains', campains);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something break! \n We will contact you later ')
});
// app.use( '/*', ( req, res ) => {
//     const error = new Error( 'Requested path does not exist.' );

//     error.statusCode = 404;
//     res.status( error.statusCode ).json( new HttpError( error ) );
// } );

app.listen(port,()=>{
    console.log(`I am up in http://127.0.0.1:${port}`);
});