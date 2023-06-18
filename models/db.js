const mongoose=require('mongoose');


const connect=async()=>{
    //await mongoose.connect(process.env.DATABASE_URL)
    await mongoose.connect("mongodb+srv://LibbyMark:Libby058328@cluster0.gipdum1.mongodb.net/sample_supplies")
    console.log('connected');
}


const disconnect=()=>{};

module.exports={connect, disconnect}

