
// const a   = require('../app')

module.exports = function (app, rt) {

  require('./route')(app, rt)

}
// try {
//   console.log("call");
//     app.post('/api/v1',function(req,response){
//     db.con.query('INSERT INTO event (date, agenda, mode, status)   values (("'+req.body.date+'"),("'+req.body.agenda+'"),("'+req.body.mode+'"),('+req.body.status+'))', function (err, result) {
//       console.log(err)
//       let res={}
//        if(err){
//          res.msg = "error"
//          response.send(res)
//        } else {
//            console.log("one item added");
//            res.msg = ("no of item added:"+result.affectedRows)
//            response.send(res)
//          }
//        })
//      })
//  } catch(ex) {
//        console.log(ex)
//        response.send(ex)
//    }
//

// function post() {
//   app.post('/api/v1',function(req,response){
//   db.con.query('INSERT INTO event (date, agenda, mode, status)   values (("'+req.body.date+'"),("'+req.body.agenda+'"),("'+req.body.mode+'"),('+req.body.status+'))', function (err, result) {
//     console.log(err)
//     let res={}
//      if(err){
//        res.msg = "error"
//        response.send(res)
//      } else {
//          console.log("one item added");
//          res.msg = ("no of item added:"+result.affectedRows)
//          response.send(res)
//        }
//      })
//    })
// }
//
// module.exports={
//    post: post
// }
