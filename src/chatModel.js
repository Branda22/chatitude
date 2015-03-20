(function(){

  window.chats = {

    chatArray: [],
    data: {},
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

    create: function(apiToken, message){
      data.apiToken = apiToken;
      data.message = message;
    },

    post: function(data){
      $.ajax({
        type: 'POST',
        url: 'http://chat.api.mks.io/chats',
        data: JSON.stringify(data)
        success: function(){
          console.log("message posted");
          // eventually emit an event here
        }
      })
    }
  }
})(); 