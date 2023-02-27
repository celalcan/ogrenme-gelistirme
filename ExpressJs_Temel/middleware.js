const  accessControl =(req,res,next) =>{
    const access =true;
    if(!access){
        res.status(401)/*isteğe bağlı kendi belirlediğimiz status değeri*/.json({
            success:false,
            message: "You are not authorized"
        });
    }
    console.log("1.Middleware");
    next();
};


const defaultMiddleware=(req,res,next) => {
    console.log("Default Middleware");
    next();
}
module.exports={
      accessControl,
      defaultMiddleware
};