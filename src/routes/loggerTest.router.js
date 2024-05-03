const {Router} = require('express');

const router = Router();


router.get('/', (req, res)=>{
    ///console.log() --->  req.logger
    req.logger.error('this is an unhandled error', new Error('This is an error'));
    req.logger.warn('this is a warning');
    req.logger.http('--->');
    req.logger.info('this is a info log');
    req.logger.debug('this is a debug log');
    
    res.send({status:'success', message:'Logger test'})
})

router.get('/custom', (req, res)=>{
    ///console.log() --->  req.logger
    req.logger.fatal('this is a fatal error', new Error('This is an error'));

    
    res.send({status:'success', message:'custom Logger test'})
})



module.exports = {
    loggerTestsRouter: router 
}