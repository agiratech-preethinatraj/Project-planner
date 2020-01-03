const database  = require('../database/mysql')
function createEvent(req,callback) {

		try {
      console.log('req.body.date')
      console.log(req)
      database.con.query('INSERT INTO event (date, agenda, mode, status)   values (("'+req.date+'"),("'+req.agenda+'"),("'+req.mode+'"),('+req.status+'))',function(err,result){

			    let res={}
          console.log("one item added");
          res.msg = (" An item added")
          callback(200, 'Success', res);
        })


        } catch(ex) {
      console.log(ex)
      callback(400,'error');
    }
  }

module.exports = {
  createEvent: createEvent
}
