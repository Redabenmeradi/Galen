importClass(org.openqa.selenium.interactions.Actions);

load("init.js");
load("pages/LoginPage.js");

testOnAllDevices("Login page", "/", function (driver, device) {
    var loginPage = new LoginPage(driver);
    loginPage.loginAs(TEST_USER.username, TEST_USER.password);
        checkLayout(driver, "galen/Specs/profil_page.gspec", device.tags);
});
