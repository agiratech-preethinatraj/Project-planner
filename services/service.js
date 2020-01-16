const database  = require('../database/mysql')
function createEvent(req,callback,status) {

		try {
      console.log('req.body.date')
      console.log(req)
      database.con.query('INSERT INTO event (date, agenda, mode, status)   values (("'+req.date+'"),("'+req.agenda+'"),("'+req.mode+'"),('+req.status+'))',function(err,result){

			    let res={}
          console.log("one item added");
          res.msg = (" An item added")
          callback( 200,"Success",res);
        })
  		} catch(ex) {
		      console.log(ex)
		      callback(400,'error');
    		}
		}



function events(req,callback,status){
		try {
	    console.log('req.body.date')
	    console.log(req)
	    database.con.query('SELECT * from event")',function(err,result){
				let res={}
				     if(err){
				       res.msg = "error"
				         response.send(res)
				       } else {
				       events=[]
				       for (r in result){
				         ch = {}
				         ch.E_ID     = result[r].E_ID;
				         ch.date     = result[r].date;
				         ch.agenda   = result[r].agenda;
				         ch.mode     = result[r].mode;
				         ch.status   = result[r].status;
				         events.push(ch)
				       }
				       res.msg=(events)
			         callback( 200,"Success",res);
				     }
					 })
	        } catch(ex) {
	      console.log(ex)
	      callback(400,'error');
	    }
	  }

function updateEvent(req,callback,status){
	try{

		let sql="UPDATE event SET agenda =('"+req.body.agenda+ "'),date =('"+req.body.date+ "') WHERE E_ID=('"+req.body.E_ID+"') ";
	  db.con.query(sql, function (err, result) {
	    let res={}
	     if(err){
	       res.msg = "error"
	         response.send(res)
	         }else{
	         console.log("one item added");
	         res.msg = ("no of item added:"+result.affectedRows)
	         callback( 200,"Success",res);
	       }
	      })

	   } catch(ex) {
	      console.log(ex)
       	callback(400,'error');
	  }
}


function deleteEvent(req,callback,status){
try{


  let sql= "DELETE from event WHERE E_ID  = ('"+req.body.E_ID+"')";
    db.con.query(sql, function (err, result) {
      var res={}
       if(err){
         res.msg = "error"
           response.send(res)
           }else{
           console.log("one item deleted");
           res.msg = ("no of item deleted:"+result.affectedRows)
           callback( 200,"Success",res);
         }
        })

    } catch(ex) {
        console.log(ex)
        callback(400,'error');
    }
}



module.exports = {
  createEvent: createEvent,
	events: events,
	updateEvent: updateEvent,
	deleteEvent: deleteEvent
}
