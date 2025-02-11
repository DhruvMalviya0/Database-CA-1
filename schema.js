const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    item:[itemSchema]

});

const itemSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }

});

mongoose.model('Restaurant', resturantSchema);
mongoose.model('Item', itemSchema);
