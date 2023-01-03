const mongoose = require("mongoose")
/*const Schema = mongoose.Schema*/

const CustomerSchema = mongoose.Schema(
/*const CustomerSchema = new Schema(*/
    {
        CustomerId: Number,
        FullName:   String,
        Address:    String
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Customer', CustomerSchema)