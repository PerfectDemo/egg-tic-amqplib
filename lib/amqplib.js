'use strict';
const amqplib = require('amqplib');
module.exports = (app) => {  
    app.addSingleton('amqplib', createClient);
}

async function createClient(config, app) {
    const { url , connectOptions, socketOptions } = config;
    const connectParam = url ? url : parseOptions(connectOptions);
    const logString = typeof connectParam === 'string' ? `url: ${connectParam}` : `hostname: ${connectParam.hostname}; port: ${connectParam.port}`
    app.logger.info(`[RABBIT_CONNECT]: ${logString}`);
    const retryConnect = retry(connect);
    const amqp = await retryConnect(connectParam, socketOptions, app);
    return amqp;
}

async function connect(connectOptions, socketOptions, app) {
    let conn;
    try {
        conn = await amqplib.connect(connectOptions, socketOptions);
        app.logger.info(`[RABBIT_CONNECT_SUCCESS]`);
    } catch (error) {
        app.logger.error(`[RABBIT_CONNECT_ERROR]: message: ${error.message}`);
        throw error;
    }   
    return conn;
}

function retry(fn, retryCount = 3) {
    let count = 0;
    return async function doIt(...args) {
    
        if (count >= retryCount) {
            console.log('[DO_FAILED_END]' + count);              
            process.exit(0);
        }

        try {
            const conn = await fn(...args)
            console.log('[TRY_SUCCESSED]');
            return conn;
        } catch (error) {
            count++;
            console.log('[TRY_FAILED]: ' + count + ' times');            
            const result = await doIt(...args);
            return result;
        }
      
    }
}

function parseOptions(connectOptions) {
    return Object.assign(
      {
        protocol: 'amqp',
        hostname: 'localhost',
        port: 5672,
        username: 'guest',
        password: 'guest',
        locale: 'en_US',
        frameMax: 0,
        heartbeat: 0,
        vhost: '/',
      },
      connectOptions,
    );
  }