const db  = require('../database/mysql')

module.exports = function (app, rt) {

  rt.route('/v1').post(function(req,response){
  db.con.query('INSERT INTO event (date, agenda, mode, status)   values (("'+req.body.date+'"),("'+req.body.agenda+'"),("'+req.body.mode+'"),('+req.body.status+'))', function (err, result) {
    console.log(err)
    let res={}
     if(err){
       res.msg = "error"
       response.send(res)
     } else {
         console.log("one item added");
         res.msg = ("no of item added:"+result.affectedRows)
         response.send(res)
       }
     })
   })

  app.use('/api', rt)

  // app.post('/api/v1',)

}
