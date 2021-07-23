const winston = require('winston');
/**
 * error: 0, 
 * warn: 1, 
 * info: 2, 
 * verbose: 3, 
 * debug: 4, 
 * silly: 5 
 */

const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    transports: [new winston.transports.Console()],
    // exceptionHandlers: [
    //     new winston.transports.File({ filename: 'exceptions.log' })
    // ],
    exitOnError: true
});


module.exports = logger;