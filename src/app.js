(function(){

  window.App = {};
  App.chatEvents = new Events();
  setInterval(function(){
    chatModel.fetch();
  }, 1000); 

}());