const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'describes the base number',
            type: 'number'
        },
        'l': {
            alias: 'list',
            demandOption: false,
            describe: 'If true, lists the written text in console',
            type: 'boolean',
            default: false
        },
        'h': {
            alias: 'limit',
            demandOption: false,
            describe: 'Define the limit for the base multiple table',
            type: 'number',
            default: 10
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('Not a number');
        }
        return true;
    })
    .argv;

module.exports = argv;