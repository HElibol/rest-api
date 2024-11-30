const mongoose = require('mongoose');

const RolesSchema = new mongoose.Schema({
    role_name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: trued
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

});

class Roles extends mongoose.model{

}  

Schema.loadClass(Roles);
module.exports = mongoose.model('roles', RolesSchema);