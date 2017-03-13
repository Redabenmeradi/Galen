load("galen-bootstrap/galen-bootstrap.js");

var TEST_USER = {
    username: "<your-username>",
    password: "<you-password>"
};

$galen.settings.website = "https://app.cinode.com/login";
//$galen.settings.website = "http://localhost:8080";

$galen.registerDevice("mobile", inSingleBrowser("mobile emulation", "450x700", ["mobile"]));
$galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1024x768", ["desktop"]));
