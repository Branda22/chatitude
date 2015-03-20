(function(){

  window.chats = {

    chatArray: [],
    apiToken:
    fetch: function(){
      $.ajax({
        type: 'GET',
        url: 'http://chat.api.mks.io/chats',
        success: function (data) {
          chats.chatArray = data; 
          console.log(data);
          App.chatEvents.emit('change:chats', data);
        }
      }); 

    },

    create: function(){
      //store it in the array
    },

    post: function(apiToken, message){
      $.ajax({
        type: 'POST',
        url: 'http://chat.api.mks.io/chats',
        data: JSON.stringify(message)
      })
    }
  }
})(); 