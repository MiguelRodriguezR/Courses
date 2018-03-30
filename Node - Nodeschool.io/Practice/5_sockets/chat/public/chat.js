(function(d,io){
  'use strict';
  var io=io(),
  chatForm=d.querySelector('#chat-form'),
  messageText=d.querySelector('#message-text'),
  chat=d.querySelector('#chat');

  chatForm.onsubmit = function(e) {
    e.preventDefault();
    io.emit('newMessage',messageText.value)
    messageText.value=null;
    return false;
  }

  io.on('newUser',function (newUser) {
    // console.log(newUser.message);
    //alert(newUser.message);
    chat.insertAdjacentHTML('beforeend','<li><b>Admin says: '+newUser.message+'</b></li>');
  });

  io.on('someoneSays',function (someoneSays) {
    // console.log(someoneSays);
    chat.insertAdjacentHTML('beforeend','<li>'+someoneSays+'</li>');
  });

  io.on('byeUser',function (byeUser) {
    // console.log(byeUser.message);
    //alert(byeUser.message);
    chat.insertAdjacentHTML('beforeend','<li><b>Admin says: '+byeUser.message+'</b></li>');
  });

})(document,io);
