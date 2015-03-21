(function(){

  window.User = {};

  User.Presenter = function(){
    var self = this;
    var $username = $('input[name=username');
    var $password = $('input[name=username');
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
      this.getData();
      window.users.signup(data);
    }

    this.getSignin = function () {
      this.getData();
      window.users.signin(data);
    }

    this.getData = function () {
      data.username = $username.val();
      data.password = $password.val();
      data = JSON.stringify(data);
    }
  }
})();