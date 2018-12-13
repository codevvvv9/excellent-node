const http = require('http');

// let count = 0;

// const server = http.createServer((request, response) => {
//   response.end(`hello. you are No. ${count += 1} User`);
// });
const server = http.createServer();
server.on('request', (request, response) => {
  // response.end(`hello, you are No.${count += 1} User`);
  // console.log(request.method);
  console.log(request.headers);
  const contentType = request.headers['content-type']
  switch (contentType) {
    case 'text/plain':
      let str = '';
      request.on('data', (data) => {
        console.log(1);
        str += data.toString('utf-8');
      });
      request.on('end', () => {
        console.log(2);
        response.end(`you send a text: ${str}`);
      });
      console.log(3);
      break;
    case 'application/json':
      response.end('you send a json');
      break;
    default:
      response.end('you send a illegal message');
      break;
  }
});
server.listen(8989);
// server.on('error', (error) => {
//
// });
