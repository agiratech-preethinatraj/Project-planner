
const ct  = require('../routes/route')
const service = require('../services/service')

function createEvent(req,response){

    try {
        service.createEvent(req.body, function(status, message, data) {
          response.contentType('json').send(status, message, data, response);
        });
    } catch (exception) {
        console.log(exception)
        return response.status(400).contentType('json').send({
            status: false,
            error: 'exception'
        });
    }
 }

function events(req,response) {

   try {
      service.events(req.body, function(status, message, data) {
        response.contentType('json').send(status, message, data, response);
      });
  } catch (exception) {
      console.log(exception)
      return response.status(400).contentType('json').send({
          status: false,
          error: 'exception'
      });
    }
  }

function updateEvent(req,response) {

   try {
      service.updateEvent(req.body, function(status, message, data) {
        response.contentType('json').send(status, message, data, response);
      });
  } catch (exception) {
      console.log(exception)
      return response.status(400).contentType('json').send({
          status: false,
          error: 'exception'
      });
  }
}

function deleteEvent(req,response) {

   try {
      service.deleteEvent(req.body, function(status, message, data) {
        response.contentType('json').send(status, message, data, response);
      });
  } catch (exception) {
      console.log(exception)
      return response.status(400).contentType('json').send({
          status: false,
          error: 'exception'
      });
  }
}




 module.exports = {
   createEvent: createEvent,
   events: events,
   updateEvent: updateEvent,
   deleteEvent: deleteEvent
 }
