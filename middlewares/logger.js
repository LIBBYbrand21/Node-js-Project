module.exports=function(msg){return function(req,res,next){
    console.log(`${msg} ${req.url} at ${new Date()}`);
    next();
}}