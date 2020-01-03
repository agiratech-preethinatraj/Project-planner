
const ct  = require('../routes/route')
const service = require('../services/service')

function createEvent(req,response){

    try {
        service.createEvent(req.body, function(status, message, data) {
          response.send(status, message, data, response);
        });
    } catch (exception) {
        console.log(exception)
        return response.status(400).contentType('json').send({
            status: false,
            error: 'exception'
        });
    }
 }
 module.exports={
   createEvent: createEvent
 }
