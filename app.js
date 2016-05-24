'use strict'

const http         = require('http'),
      env          = process.env,
      express      = require('express'),
      apiController= require('./controllers/apiController'),
      bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiController);


app.get('/health', function(req, res) {
    // IMPORTANT: Your application HAS to respond to GET /health with status 200
    // for OpenShift health monitoring
    res.writeHead(200);
    res.end();
});

let server = http.createServer(app);

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
    console.log(`Application worker ${process.pid} started...`);
});
