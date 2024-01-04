const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    // username: String,
    // email: String,
    // password: String
    // id (unique identifier)
    //     created_at (timestamp, automatically set when the user is created)
    // updated_at (timestamp, automatically updated when the user is updated)
    name: String,
    avatar: String,
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
},{
    versionKey: false
})

const UserModel = mongoose.model("api", userSchema)


module.exports={
    UserModel
}