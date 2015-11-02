
    // Wait timeouts (ms) for opening the page and making
    // AJAX requests.
    var openPageTimeout = 50000,
        serviceCallTimeout = 100000;

    var validUsername = "sentrana",
        validPassword = "monday1",
        inValidUsername = "sentrana",
        inValidPassword = "sentranaxyz";

    var invalidCredentialsMsg = "Login information is not correct or user is not active.",
        noUsernameMsg = "Please specify a user name";

    module("Login", {
        setup: function () {
            // Open the page
            S.open("/biq", openPageTimeout);
        }
    });

    // Test a login with no credentials.
    test("Login attempt with no credential", function () {
        console.log("Logging attempt without credentials...");

        Sentrana.Testing.BIQ.login("","");

        //Wait for error message to appear
        S(".login-error").visible().text(noUsernameMsg, "Please specify a user name");
    });

   // Test a login with invalid credentials.
    test("Login attempt with invalid credential", function () {
        console.log("Logging attempt with invalid credentials...");


        Sentrana.Testing.BIQ.login(inValidUsername, inValidPassword);

        //Wait for loading message to appear and vanish
        S(".login-error").visible(50000).text(invalidCredentialsMsg, "Login information is not correct or user is not active.");
    });

    // Test a login with valid credentials.
    test("Login attempt with valid credential", function () {
        console.log("Logging in with valid credentials...");



        Sentrana.Testing.BIQ.login(validUsername, validPassword);

        //Wait for loading message to appear and vanish
        //S(".ahrc-action-msg").visible().invisible(serviceCallTimeout);

        // Wait for login page to be hidden...
        S(".login-form").invisible(function () {
            ok(true, "The login is successful.");
        });
    });



