const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "order name required"]

    },
    email: {
        type: String,
        required: [true, "order email required"]

    },
    userid: {
        type: String,
        //  required: true

    },

    orderitems: [],
    shippingAddress: {
        type: String,
        required: true
    },
    orderAmount: {
        type: String,
        // required: true
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    transectionId: {
        type: String,
        //  required: true
    },

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema)