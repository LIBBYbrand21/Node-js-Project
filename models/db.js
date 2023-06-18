const mogoose=require('mogoose');


const connect=async()=>{
    await mogoose.conect(process.env.DATABASE_URL)
    console.log('connected');
}


const disconnect=()=>{};

module.exports={connect, disconnect}

