var http = require('http');

http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    switch (req.url) {
      case '/about':
        msg = 'this is about';
        break;
      case '/kill':
        msg = 'this is kill';
        console.log('die');
        process.exit(0);
        break;
      default:
        msg = 'this is default';
        break;

    }
    res.write(msg);
    res.end();

}).listen(80); // 127.0.0.1の80番ポートで待機

function intervalFunc() {
  console.log('Cant stop me now!');
}

 process.on('SIGTERM', () => {
     console.log('Got SIGTERM');
     setInterval(intervalFunc, 1000);
 });
