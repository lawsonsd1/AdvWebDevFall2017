var mongoose = require('mongoose');
var debug = require('debug')('demo:mongo');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Empl';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI, {
  useMongoClient: true,
});

mongoose.Promise = Promise;

mongoose.connection.on('connected', function() {
    debug('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    debug('Mongoose connection error: ' + err);
    process.exit(0);
});
mongoose.connection.on('disconnected', function() {
    debug('Mongoose disconnected');
});

gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        debug('Mongoose disconnected through ' + msg);
        callback();
    });
};
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app termination', function() {
        process.exit(0);
    });
});

process.on('exit', function(code) {
  debug('About to exit with code: ', code);
});