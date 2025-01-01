const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        default: true
    }
},{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Categories extends mongoose.Model{


}  

CategoriesSchema.loadClass(Categories);
module.exports = mongoose.model('categories', CategoriesSchema);