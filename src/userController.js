(function(){

  window.Users = {};

  //Controller
  Users.controller = {

    data: {},

    signup: function (username, password) {
      var data = {};
      data.username = username;
      data.password = password;
      window.users.signup(data);
    },

    signin: function (username, password) {
      var data = {};
      data.username = username;
      data.password = password;
      window.users.signin(data);
    }
  } 

  //Views
  Users.view = function(){
    return $('<h1>SIGN UP</h1>').append(
      signUpForm(),
      $("<h1>SIGN IN</h1>"), 
      signInForm()
    )
  }

  //Helpers
  function signUpForm() {
    return $("<form class='pure-form pure-form-stacked'>").on('submit', function(e){
      e.preventDefault();
      Users.controller.signup(this.username.value, this.password.value);

    }).append(
      $("<label>").text("username: "),
      $("<input type='text' name='username'>"),
      $("<br>"),
      $("<label>").text("password: "),
      $("<input type='text' name='password'>"),
      $("<br>"),
      $("<input class='pure-button pure-button-primary' type='submit'>").text("Sign up")
    )
  }

  function signInForm() {
    return $("<form class='pure-form pure-form-stacked'>").on('submit', function(e){
      e.preventDefault();
      Users.controller.signin(this.username.value, this.password.value);
    }).append(
      $("<label>").text("username: "),
      $("<input type='text' name='username'>"),
      $("<br>"),
      $("<label>").text("password: "),
      $("<input type='text' name='password'>"),
      $("<br>"),
      $("<input class='pure-button pure-button-primary' type='submit'>").text("Sign in")
    )
  }

  Users.render = function(element){
    var usersDOM = Users.view();
    $(element).empty().append(usersDOM);
  }

  Users.mount = function(element){
    Users.render(element);
  }
})();