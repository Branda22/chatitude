(function(){

  var chatArray = [];
  window.chatModel = {

    data: {},
    fetch: function(){
      $.ajax({
        type: 'GET',
        url: 'http://chat.api.mks.io/chats',
        success: function (data) {
          chatArray = data; 
          console.log(data);
          App.chatEvents.emit('change:chats', data);
        }
      }); 
    },

    create: function(apiToken, message){
      window.chatModel.data.apiToken = apiToken;
      window.chatModel.data.message = message;
      window.chatModel.post(this.data)
    },

    post: function(data){
      $.ajax({
        type: 'POST',
        url: 'http://chat.api.mks.io/chats',
        data: data,
        success: function(){
          console.log("message posted");
          // eventually emit an event here
        }
      })
    },

    map: function(callback){
      return chatArray.map(callback);
    }
  }
})(); 