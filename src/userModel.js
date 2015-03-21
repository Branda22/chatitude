(function(){

  window.users = {
    signup: function(data){
      $.ajax({
        type: 'POST',
        url: 'http://chat.api.mks.io/signup',
        data: data,
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
        url: 'http://chat.api.mks.io/signin',
        data: data,
        success: function(data){
          console.log("Succcesful sign in")
          localStorage.setItem("apiToken", data.apiToken)
          // todo: emit a change:user event here
        },

        error: function(){
          console.log("Unsuccessful sign in");
        }
      })
    }
  }
})(); 