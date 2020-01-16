const controller = require('../controller/controller')

module.exports = function (app, rt) {

  rt.route('/v1')
    .post(controller.createEvent)
    .get(controller.events)
    .put(controller.updateEvent)
    .delete(controller.deleteEvent)

  app.use('/api', rt)


}
