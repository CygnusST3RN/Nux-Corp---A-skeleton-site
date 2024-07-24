
const validate = (schema) => async (req, res, next) => { 
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err)
    {
        const status = 400;
        const message = "Fill the form correctly";
        const extra = err.errors[0].message;
        const error = {
            status,
            message,
            extra
        };
        console.log(err);


        // res.status(400).json({msg : message});
        next(error);
    }
}

module.exports = validate;