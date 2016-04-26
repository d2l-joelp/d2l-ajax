var request = require('superagent');
var auth = require('superagent-d2l-session-auth')();

function get(route, errorCallback, successCallback) {
    request
        .get(route)
        .use(auth)
        .end(function(err, res) {
            if (err) {
                if (typeof errorCallback === 'function') {
                    errorCallback(err);
                }
                return;
            }

            if (typeof successCallback === 'function') {
                successCallback(res);
            }
        });
}

module.exports = {
    get: get
}
