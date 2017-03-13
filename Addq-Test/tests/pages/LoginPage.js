

this.LoginPage = $page("Login page", {
  email: "id: UserName", // id locator
  password: "id: Password", // id locator
  submitButton: "id: btn-login", // id locator
}, {
    loginAs: function (userName, password) {
      this.email.typeText(userName);
      this.password.typeText(password);
      this.submitButton.click();
    }
});
