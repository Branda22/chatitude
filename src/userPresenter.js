(function(){

  window.User = {};

  User.Presenter = function(){
    var self = this;
    var $usernameUp = $('#signup input[name=username]');
    var $passwordUp = $('#signup input[name=password]');
    var $usernameIn = $('#signin input[name=username]');
    var $passwordIn = $('#signin input[name=password]');
    var data = {};

    // listeners
    $('input[name="signup"]').on('click', function(e){
      e.preventDefault();
      self.getSignup();
    })

    $('input[name="signin"]').on('click', function(e){
      e.preventDefault();
      self.getSignin();
    })

    // methods
    this.getSignup = function () {
      this.getData( $usernameUp, $passwordUp );
      window.users.signup(data);
    }

    this.getSignin = function () {
      this.getData($usernameIn, $passwordIn );
      window.users.signin(data);
    }

    this.getData = function (username, password) {
      data.username = username.val();
      data.password = password.val();
      // data = JSON.stringify(data);
    }
  }

  User.mount = function(){
    var presenter = new User.Presenter();
  }
})();