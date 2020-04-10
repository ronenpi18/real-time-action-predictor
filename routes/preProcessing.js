var express = require('express');
var router = express.Router();
var validate = require('../src/validator')

router.get('/', function(req, res, next) {
    res.send('You Are @ /preProcess/');
});

router.post('/dataListener', (req,res, next) => {
    var event = req.body.eventJson
    if(!validate.listenerValidator.check(event)){
        res.send("your event is wrong - check the schema again")
    }


})
module.exports = router;
