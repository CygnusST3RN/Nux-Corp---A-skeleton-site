const {z} = require("zod");

const loginSchema = z.object({
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .email({message: "Invalid Email Address"})
        .min(3, {message:"Email must be atleast of 3 letters"})
        .max(255, {message:"Email must be smaller than 255 characters"}),
    password: z
        .string({required_error:"Password is required"})
        .min(6, {message:"Password must be atleast of 6 letters"})
        .max(1024, {message:"Password must be smaller than 255 characters"}),

});

const signupSchema = z.object({
    username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"Name must be atleast of 3 letters"})
        .max(255, {message:"Name must be smaller than 255 characters"}),
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .email({message: "Invalid Email Address"})
        .min(3, {message:"Email must be atleast of 3 letters"})
        .max(255, {message:"Email must be smaller than 255 characters"}),
    
    phone: z
        .string({required_error:"Phone is required"})
        .trim()
        .min(10, {message:"Phone must be atleast of 10 letters"})
        .max(20, {message:"Phone must be smaller than 20 characters"}),

    password: z
        .string({required_error:"Password is required"})
        .min(6, {message:"Password must be atleast of 6 letters"})
        .max(1024, {message:"Password must be smaller than 255 characters"}),
})


module.exports = {signupSchema, loginSchema};