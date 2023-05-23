const { Schema, model } = require('mongoose'); // Import Mongoose

const Document= new Schema({  // Create Schema
    _id: String, //id of the document
    data: Object    //data of the document
});

module.exports = model('Document', Document); // Export Model