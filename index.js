(function() {

    // get our service container and supply it with it's own dependencies (needs to be done by hand)
    var ServiceContainer = require('app/serviceContainer')(),
        myServiceContainer = new ServiceContainer();

    var Server = myServiceContainer.get('app.Server');
    myServer = new Server(3000);

    /*var myDatabaseConnection = myServiceContainer.instance('app.Database');
    myDatabaseConnection.connect(function() {
        myDatabaseConnection.query('SELECT * FROM user', function(data) {
            console.log(data);

            myDatabaseConnection.close();
        });
    });*/

    myServer.start(function(request, response) {
        var App = myServiceContainer.get('app.App');
        (new App()).handle(request, response);
    });
})();