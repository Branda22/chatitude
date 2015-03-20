(function(){

  window.users = {
    apiToken: undefined,
    signup: function(data){
      $.ajax({
        type: 'POST',
        url: 'http://chat.api.mks.io/chats',
        data: JSON.stringify(data),
        success: function(){
          console.log("Succcesful signup!") 
        },
        error: function(){
          console.log("Unsuccessful signup...")
        }
      })
    },
    
    signin: function(data){
      $.ajax({
        type: 'POST',
        url: 'http://chat.api.mks.io/chats',
        data: JSON.stringify(data)
        success: function(data){
          users.apiToken = data.apiToken;
          // todo: emit a change:user event here
        }
      })
    }
  }
})(); 