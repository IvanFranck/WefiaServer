const app = require('./app');
const http = require ("http");

const port = process.env.PORT || "3030";
app.set('port', port)

/**
 * handle error when start server
 * @param {error} error 
 */
const errorHandler = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges. ');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;

    }   
   
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on('listening', ()=> {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log("Listenning on " + bind);
});

server.listen(port)