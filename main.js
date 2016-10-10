var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Chat');
var chatDb = require('./controllers/chatDb');
chatDb.init();
//inserts a new user records into the DB
chatDb.registerUser({username: 'DonchoMinkov', password: '123456q'});
//inserts a new message record into the DB
//the message has two references to users (from and to)
chatDb.sendMessage({
    from: 'DonchoMinkov',
    to: 'NikolayKostov',
    text: 'Hey, Niki!'
});
//returns an array with all messages between two users
chatDb.getMessages({
    with: 'DonchoMinkov',
    and: 'NikolayKostov'
});