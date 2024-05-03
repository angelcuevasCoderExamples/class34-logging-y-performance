const express = require('express');
const addLogger = require('./middlewares/addLogger.middleware');
const {loggerTestsRouter} = require('./routes/loggerTest.router');
const { performanceRouter } = require('./routes/performance.router');
const port = 8080;

const app = express();
app.use(addLogger)

/** ROUTES */
app.use('/api/logger', loggerTestsRouter)
app.use('/api/performance', performanceRouter)


app.listen(port, ()=>console.log(`Up and running on port ${port}`))