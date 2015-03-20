(function(){

  window.chats = {

    fetch: function(){
      $.ajax({
        type: 'GET',
        url: 'http://chat.api.mks.io/chats',
        success: function (data) {
          App.chatEvents.emit('change:chats', data)
        }
      }); 

    }


  }
})(); 