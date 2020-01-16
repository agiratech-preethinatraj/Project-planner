const express   = require('express');
const bodyParser= require('body-parser');
const app       = express();
const rt        = express.Router();

app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }));

const route     = require('./routes/index')(app, rt)

//Post method for create

//Put method for update
// try{
//
//   app.put('/api/v1/put',function(req,response){
//   let sql="UPDATE event SET agenda =('"+req.body.agenda+ "'),date =('"+req.body.date+ "') WHERE E_ID=('"+req.body.E_ID+"') ";
//   db.con.query(sql, function (err, result) {
//     let res={}
//      if(err){
//        res.msg = "error"
//          response.send(res)
//          }else{
//          console.log("one item added");
//          res.msg = ("no of item added:"+result.affectedRows)
//          response.send(res)
//        }
//       })
//     })
//    } catch(ex) {
//       console.log(ex)
//        response.send(ex)
//   }
//
// //Delete method for delete
// try{
//
//   app.delete('/api/v1/delete',function(req,response){
//   let sql= "DELETE from event WHERE E_ID  = ('"+req.body.E_ID+"')";
//     db.con.query(sql, function (err, result) {
//       var res={}
//        if(err){
//          res.msg = "error"
//            response.send(res)
//            }else{
//            console.log("one item deleted");
//            res.msg = ("no of item deleted:"+result.affectedRows)
//            response.send(res)
//          }
//         })
//       })
//     } catch(ex) {
//         console.log(ex)
//          response.send(ex)
//     }
// //Get method
// try{
//
//   app.get('/api/v1/get',function(req,response){
//   db.con.query("SELECT * from event", function(err,result){
//     let res={}
//      if(err){
//        res.msg = "error"
//          response.send(res)
//        } else {
//        events=[]
//        for (r in result){
//          ch = {}
//          ch.E_ID     = result[r].E_ID;
//          ch.date     = result[r].date;
//          ch.agenda   = result[r].agenda;
//          ch.mode     = result[r].mode;
//          ch.status   = result[r].status;
//          events.push(ch)
//        }
//        res.msg=(events)
//        response.send(res)
//      }
//    });
//   });
//  } catch(ex) {
//       console.log(ex)
//       response.send(ex)
//   }

//Port allocation
app.listen(3006,function(){
  console.log("listening to 3006");
});
