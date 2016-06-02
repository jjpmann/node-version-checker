'use strict';

module.exports = function (required) {
    required = typeof required =='number' ? required : 5;

    var version = Number(process.version.match(/^v(\d+)\.(\d+)/)[1]);
    
    if (version !== required) {
        var msg = '------------------------------------------------------\n\n';
            msg += 'Node version does not match, version ' + required + ' required.';
            msg += '\n\n------------------------------------------------------';
        console.error(msg)
        process.exit();
    }

}

