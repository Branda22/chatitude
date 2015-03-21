(function(){

  window.Chat = {};

  // Presenter constructor
  Chat.Presenter = function( element ){
    var $view = $(element);
    var $newMessage = $("#message textarea[name='newMessage']");

    $('input[name="newMessage"]').on("click", function(e){
      e.preventDefault();
      var apiToken = window.localStorage.getItem("apiToken");
      var newMessage = $newMessage.val();
      window.chatModel.create(apiToken, newMessage);
    });

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

  function sanitizeString (str){
    str = str.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim,"");
    return str.trim();
  }

  // Helper view function function
  function chatView (chat) {
    var message = sanitizeString(chat.message);
    return $('<div class="chat">').append(
      $('<p>').append("user: ", chat.user),
      $('<p>').append("message : ", message)
    )
  }

  // This function is called in index.html, it puts the view on the page.
  Chat.mount = function(element){
    var presenter = new Chat.Presenter(element)
    presenter.render();  
  }

})();