var mesageController,userController;

module.exports={
    init:function () {
        userController=require('./UserController');
        mesageController=require('./MessageController');
    },
    registerUser:function (user) {
        userController.registerUser(user);
    },
    sendMessage:function (messageData) {
        mesageController.sendMessage(messageData)
    },
    getMessages:function (messageData) {

        mesageController.getMessagesBetwieenUsers(messageData,function (messages) {
            console.log(messages.join('\n\n'));
        })
    }
}