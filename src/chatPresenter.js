(function(){

  window.Chat = {}

  Chat.Presenter = function( element ){
    var $view = $(element);

    this.render = function(){
      $view.empty().append(
        Chat.view(),
        chatModel.map(chatView);
      )

    }

    App.chatEvents.on('change:chats', this.render);
  }

  Chat.view = function(){

  }

  function chatView (chat) {
    
  }

  Chat.mount = function(element){
    var presenter = new Chat.Presenter(element)
    presenter.render();  
  }

})();