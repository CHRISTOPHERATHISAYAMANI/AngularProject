var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      config = require('./config/DB');
      coinRoutes = require('./expressRoutes/coinRoutes');
      

      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );
      const app = express();
      var port = process.env.PORT || 2000;
      app.use(function (req, res, next) {
        console.log('Time:', Date.now())
        next()
      })
      app.use('/coins', coinRoutes);

      var server = app.listen(function(){
        console.log('Listening on port ' + port);
      });