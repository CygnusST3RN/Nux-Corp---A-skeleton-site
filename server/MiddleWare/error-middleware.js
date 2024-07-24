const errorMiddleWare = function(error, req, res, next){
    const status = error.status || 500;
    const message = error.message || "Fill the form properly";
    const extra = error.extra || "Backend Error";

    return res.status(status).json({message, extra});
}

module.exports = errorMiddleWare;