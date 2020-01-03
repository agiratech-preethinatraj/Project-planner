const controller = require('../controller/controller')

module.exports = function (app, rt) {

  rt.route('/v1')
    .post(controller.createEvent)

  app.use('/api', rt)


}
