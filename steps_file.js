// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    loginUser: function () {
      this.amOnPage('/login.html');
      this.fillField('#user_login', 'username');
      this.fillField('#user_password', 'password');
      this.click('Sign in');
      this.wait(2);
    }

  });
}
