const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        firstName:{
            type:String,
            required:true,
            trim:true,   
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
        }
    },

    branch: {
        type:String,
        required:true,
        trim:true,
    },

    enrollement_number:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    entry_time:{
        type:String,
        trim:true
    },

    loged_in:{
        type:Boolean,
        default:false
    }
});




const User = mongoose.model('User',userSchema)

module.exports = User;
