const http = require('http');
// 解析url中？之后的键值对
const qs = require('querystring');

const server = http.createServer();
server.on('request', (request, response) => {
  // console.log(request.method);
  const url = request.url;
  console.log(url);
  const contentType = request.headers['content-type'];
  let str = '';
  switch (contentType) {
    case 'text/plain': {
      response.setHeader('Content-Type', 'text/plain');
      request.on('data', (data) => {
        str += data.toString('utf-8');
      });
      request.on('end', () => {
        response.statusCode = 200;
        response.end(JSON.stringify({ result: `you sent plain text: ${str}` }));
      });
      break;
    }
    case 'application/json': {
      response.setHeader('Content-Type', 'application/json');
      request.on('data', (data) => {
        str += data.toString('utf-8');
      });
      request.on('end', () => {
        let jsonReqBody;
        try {
          console.log(4);
          jsonReqBody = JSON.parse(str);
          console.log(jsonReqBody);
        } catch (e) {
          response.statusCode = 400;
          response.end(JSON.stringify({ err: 'you sent a bad request' }));
        }
        response.end(JSON.stringify(jsonReqBody));
      });
      break;
    }
    case 'application/x-www-form-urlencoded': {
      response.setHeader('Content-Type', 'text/plain');
      request.on('data', (data) => {
        str += data.toString('utf-8');
      });
      request.on('end', () => {
        const requestBody = qs.parse(str);
        console.log(requestBody);
        response.end(str);
      });
      break;
    }
    case 'multipart/form-data':
      request.on('data', (data) => {
        str += data.toString();
      });
      response.end('you send a file');
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
