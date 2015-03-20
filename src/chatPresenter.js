(function(){

  window.Chat = {}

  Chat.Presenter = function( element ){
    var $view = $(element);

    this.render = function(){
      
    }

    App.chatEvents.on('change:chats', this.render);
  }


})();