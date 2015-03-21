(function(){

  window.Chats = {};

  // controller
  Chats.controller = {
    createMessage: function(apiToken, message){
      chatModel.create(apiToken, message)
    }
  }

  // view
  Chats.view = function(){
    return $('<div class="chatBoard">').append(
      $('<h2>').text("Chat Board"),
      chatForm(),
      chatModel.map(chatView)
    )
  }


  function sanitizeString (str){
    str = str.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim,"");
    return str.trim();
  }

  // helpers
  function chatView (chat) {
    var message = sanitizeString(chat.message);
    return $('<div class="chat panel">').append(
      $('<p>').append("user: ", chat.user),
      $('<p>').append(message)
    )
  }

  function chatForm(){
    var apiToken = window.localStorage.getItem("apiToken");
    return $('<form class="pure-form pure-form-stacked">').on('submit', function(e) {
      e.preventDefault();
      Chats.controller.createMessage(apiToken, this.newMessage.value)
    }).append(
      $('<label>').text('write a message: '),
      $('<textarea name="newMessage" rows="5" cols="50"></textarea>'),
      $('<input type="submit" class="pure-button pure-button-primary">').text("Post Message")
    )
  }

  Chats.render = function(element){
    var chatsDOM = Chats.view();
    $(element).empty().append(chatsDOM);
  }


  Chats.mount = function(element){
    Chats.render(element);
    App.chatEvents.on("change:chats", function(){
      Chats.render(element)
    })
  }

})();