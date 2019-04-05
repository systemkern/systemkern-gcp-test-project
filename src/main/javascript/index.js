const kotlin = require('./kotlin.js');
const custom = require('./systemkern-gcp-test-project.js');
const jsFunc = require('./function.js');

//endpoint this has to be correlated with cloudbuild.yml
exports.procRequest = (req, res) => {
    custom.processRequest(req, res);
};

exports.procBody = (req, res) => {
    let message = 'Hello Javascript World!<br>Pushed from Github<br>' +
        'Not yet with Kotlin :-(<br>' +
        'But added the Includes:-(<br>' +
        'req.query.message: ' + req.query.message + '<br>' +
        'req.body.message: ' + req.body.message + '<br>' +
        'sayHi: ' + sayHi() + '<br/>';
    // 'Kotlin: ' + kot + '<br/>';
    // 'kotlin Hello: ' + _.hello() + '<br/>';


    let response = custom.processBody(req.body.message);
    res.status(response.code).send(
        '<hr>Javascript Response:' + '<br>' +
        message + '<br>' +
        '<hr>Kotlin Response:' + '<br>' +
        response.message
    )
};

