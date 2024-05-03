const { logger, prodLogger, devLogger, customLevelsLogger } = require("../utils/loggers");

const addLogger = (req, res, next)=>{

    // if(process.env.NODE_ENV === 'production'){
    //     req.logger = prodLogger
    // }else{
    //     req.logger = devLogger;
    // }
    switch(process.env.NODE_ENV){
        case 'production':
            req.logger = prodLogger
            break;
        case 'custom':
            console.log('here')
            req.logger = customLevelsLogger;
            break;
        default:
            req.logger = devLogger; 
    }
    console.log("-->", typeof req.logger)
    req.logger.info(`NODE_ENV ${process.env.NODE_ENV}`)
    //req.logger.http(`${req.method} to ${req.url} - ${new Date().toLocaleDateString()}`)
    //req.logger.http(`${req.method} to ${req.url} - ${new Date().toLocaleDateString()}`)
    next(); 
}

module.exports = addLogger; 