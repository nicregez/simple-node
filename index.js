var restify = require('restify');
var server = restify.createServer();
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv()

server.get('/', function (req,res) {
    console.log("Service /");

    var person = {};
    person.name = 'Hans Muster';
    person.nationality = 'Switzerland';
    person.instanceIndex = process.env.INSTANCE_INDEX;

    return res.send(person);
})

server.get('/kill', function (req,res) {
    console.error("Service /kill");

    process.exit(1);
})

server.listen(appEnv.port,appEnv.bind, function () {
    console.log('server listening at %s on port %s', appEnv.bind, appEnv.port);
});

