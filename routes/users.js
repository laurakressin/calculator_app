var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/mathProblem', function(request, response, next){
  console.log(request);
  response.send("ok");
});



module.exports = router;
