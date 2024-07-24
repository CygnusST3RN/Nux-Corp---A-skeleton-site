require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleWare = require("./MiddleWare/error-middleware");
const cors = require("cors");

const app = express();


const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,

};

app.use(cors(corsOptions));

//It makes sure that the site can manage json send and recieve
app.use(express.json());


app.use("/", router);
// app.get('/', (req, res) => {
//     res.status(200).send("<body> <h1>Welcome to the site home page . This is a good pag</h1> </body>");
// });

app.use("/register", router);

app.use('/contact', contactRouter);

app.use(errorMiddleWare);


const PORT = 5000;
connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log("Server is running fine at port 5000");
    });
});
