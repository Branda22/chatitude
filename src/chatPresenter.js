(function(){

  window.Chat = {}

  // Presenter constructor
  Chat.Presenter = function( element ){
    var $view = $(element);

    this.render = function(){
      $view.empty().append(
        Chat.view(),
        chatModel.map(chatView)
      )
    }

    App.chatEvents.on('change:chats', this.render);
  }

  Chat.view = function(){
    return $('<div class="chatBoard">').append(
      $('<h2>').text("Chat Board")
    )
  }


  // Helper view function function
  function chatView (chat) {
    return $('<div class="chat">').append(
      $('<p>').append("user: ", chat.user),
      $('<p>').append("message : ", chat.message)
    )
  }

  // This function is called in index.html, it puts the view on the page.
  Chat.mount = function(element){
    var presenter = new Chat.Presenter(element)
    presenter.render();  
  }

})();