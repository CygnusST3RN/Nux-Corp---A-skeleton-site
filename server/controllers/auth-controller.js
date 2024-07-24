
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try{
        res
        .status(200)
        .send("<body> <h1>Welcome to the site home page . This is a good page from router and controller changed again</h1> </body>");
    }
    catch(error)
    {
        console.log(error);
    }
};

const register = async (req, res) => {
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({msg:"User Already Exists"});
        }

        const saltRound = 10;
        const hashVal = await bcrypt.hash(password, saltRound);
        const userCreated = await User.create({username, email, phone, password:hashVal});

        res.status(200).json({
            msg:"User successfully registered", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(),
        });
    }catch(error)
    {
        res.status(400).json({msg: "page not found"});
    }
}

const login = async function(req, res) {
    try {
        const {email, password} = req.body;

        const userExists = await User.findOne({email});

        if(!userExists)
        {
            res.status(401).json({msg: "Invalid Credentials"});
        }

        const user = await userExists.comparePassword(password);

        if(user)
        {
            res.status(200).json({
                msg:"Login Successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        }

        else{
            res.status(401).json({msg: "Invalid password or email"});
        }
    } catch (error) {
        res.status(400).json({msg: "Internal Error"});
    }
};

module.exports = { home , register, login};

