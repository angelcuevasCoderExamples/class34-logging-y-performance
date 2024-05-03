const logger = require("../utils/loggers");

const addLogger = (req, res, next)=>{
    req.logger = logger;
    req.logger.http(`${req.method} to ${req.url} - ${new Date().toLocaleDateString()}`)
    next(); 
}

module.exports = addLogger; 