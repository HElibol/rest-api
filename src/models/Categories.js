const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
    is_active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: mongoose.Mongoose.Schema.Types.ObjectId,
        default: true
    }
},{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Categories extends mongoose.model{

}  

Schema.loadClass(Categories);
module.exports = mongoose.model('categories', CategoriesSchema);