const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const urlSchema = new Schema({
    id_short :{
        type: String,
        required: true,
        unique: true,
    },
    url :{
        type: String,
        required: true,
    },
    totalClicks :[{
        timeStops : {
            type: String,
        }
    }],   
},
{
    timestamps: true,
});


const Url = mongoose.model('URL', urlSchema);
module.exports = Url;