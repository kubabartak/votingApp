var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const poll = require('./models/polls');

//conect to database 
 
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://test:test@ds119568.mlab.com:19568/voting-app'
    // change before deployment process.env.MONGODB_URI;
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  
console.log('connected to db');

// list of existing polls

router.get('/polls', function(req, res){
    poll.find({}).limit(20).exec(function(err, posts){
            if (err) {return res.send("Error reading db");} 
            else if (posts===null) {return res.send("No such poll");} else {
                res.json(posts)
            }
        })
    })


// create new Poll
router.post('/newPoll', function(req, res){
var pollOptions = req.body.poll_options;
var optionsSplitted = pollOptions.split(';');
var options=[];
for (var i=0; i<optionsSplitted.length; i++){
    options.push({answer_name: optionsSplitted[i],
        answer_vote: '' })

    
}


    var pollEntry= new poll ({
    poll_name: req.body.poll_name,
    poll_options: options
  });
    pollEntry.save(function(err){
                if (err) {
                    return res.send("Error saving to database");
                } console.log("db entry successfull")
            });
    
    res.json(pollEntry); 


});

// get single poll
 router.get('/poll/:id', function(req, res){
        
        poll.findOne({_id: req.params.id}, function(err, db) {
            if (err) {return res.send("Error reading db");} 
            else if (db===null) {return res.send("No such poll");} else {
                 res.json(db);
            }
        
        })

    })


// add new answers submitted via newAnswer form
    router.post('/poll/:id', function(request, response){
        pollID=request.params.id;
    
    var newAnswers=request.body.newAnswers;
    newAnswers=newAnswers.split(';'); 

var answersToBeAdded=[];
for (var i=0; i<newAnswers.length; i++){
    answersToBeAdded.push({answer_name: newAnswers[i],
        answer_vote: '' }) }

    // add new answers to database pollEntry_id is id of new instance (poll) - later save it as global var.

    poll.findOneAndUpdate({_id: pollID}, 
        {$pushAll: {poll_options: answersToBeAdded}}, {new: true}, function(err, doc){
            if(err) {console.log("Error on adding answers")};
           response.json(doc)     
        })
});
// add votes to db

    router.post('/vote', function(req, res){
       poll.findOneAndUpdate({_id: req.body.id, 'poll_options._id': req.body.vote}, 
           {$push: {"poll_options.$.answer_vote": "1"}}, {new:true}, function(err,docs){
               if(err) {console.log("Error on adding answers")};
          res.json(docs)   
       })
    });


        }); 



module.exports = router;