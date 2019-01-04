'use strict';
const initAmqplib = require('./lib/amqplib');
module.exports = (app) => {   
    initAmqplib(app);    
}