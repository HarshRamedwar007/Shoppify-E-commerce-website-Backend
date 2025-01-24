import mongoose from "mongoose";
 import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
     
    email: {
        type: String,
        required: true
  
    },
    password: {
        type: String,
        required: true
       }
});

// Function which is executed before saving document -> the callback is the middleware
userSchema.pre('save', async function (next) {
    // Checking if password field is modified -> if yes then hashing it before storing
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

const   userModel = mongoose.model('users', userSchema);
export default userModel;
