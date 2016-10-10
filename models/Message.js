var mongoose = require('mongoose');

var messageSchema= mongoose.Schema({
    from:{type:String,require:true},
    to:{type:String,require:true},
    text:{type:String,require:true},
    dateCreated:{type: Date,default:Date.now()}
});

mongoose.model("Message",messageSchema);