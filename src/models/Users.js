const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true  
    },
    is_active: {
        type: Boolean,
        default: true
    },
    first_name: String,
    last_name: String,
    phone_nunber: String,
},{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Users extends mongoose.model{

}  

Schema.loadClass(Users);
module.exports = mongoose.model('users', UserSchema);