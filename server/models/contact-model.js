const {Schema, model} = require("mongoose");
// const { string } = require("zod");

const contactSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    }, 
    message: {
        type: String,
        require: true,
    },
});

const Contact = new model("Contacts", contactSchema);
module.exports = Contact;