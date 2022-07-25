var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/payment/webhook/play-store', (req, res, next) => {
  try {
    const { message, subscription, message: { data: encodedMessage } } = req.body;

    console.log('*** Original message')
    console.log(req.body)

    const plainText = Buffer.from(encodedMessage, 'base64').toString('utf8');
    console.log('*** Decoding data from message');
    console.log(plainText)

    res.status(200).json(req.body);
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
