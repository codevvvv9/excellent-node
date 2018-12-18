const http = require('http');
// 解析url中？之后的键值对
const url = require('url');

const users = [];
// 假设里面的用户是如下结构
// const user = {
//   name: 'shao',
//   age: 19,
// }
const server = http.createServer();

/**
 * 解析url
 * @param request
 * @param response
 */
const parseUrl = (request, response) => {
  const { requestUrl } = { requestUrl: url.parse(request.url, true) };
  const { method } = { method: request.method };
  let userName;
  let user;
  let requestData;
  switch (requestUrl.pathname) {
    case '/user':
      switch (method) {
        case 'GET':
          userName = requestUrl.query.name;
          user = users.find(userItem => userItem.name === userName);
          response.end(JSON.parse(user));
          break;
        case 'POST':
          request.on('data', (data) => {
            requestData += data.toString('utf-8');
          });
          request.on('end', () => {
            let user;
            try {
              user = JSON.parse(requestData);
            } catch (e) {
              response.statusCode = 400;
              response.end(JSON.stringify({ err: 'you sent a bad request' }));
            }
            users.push(user);
            response.end(JSON.stringify({
              status: 'succeed',
            }));
          });
          break;
        default:
          break;
      }
      break;
    default:
      response.statusCode = 404;
      response.end();
      break;
  }
};

server.on('request', (request, response) => {
  // console.log(request.method);
  parseUrl(request, response);
  // const contentType = request.headers['content-type'];
  // let str = '';
  // switch (contentType) {
  //   case 'text/plain': {
  //     response.setHeader('Content-Type', 'text/plain');
  //     request.on('data', (data) => {
  //       requestData += data.toString('utf-8');
  //     });
  //     request.on('end', () => {
  //       response.statusCode = 200;
  //       response.end(JSON.stringify({ result: `you sent plain text: ${requestData}` }));
  //     });
  //     break;
  //   }
  //   case 'application/json': {
  //     response.setHeader('Content-Type', 'application/json');
  //     request.on('data', (data) => {
  //       requestData += data.toString('utf-8');
  //     });
  //     request.on('end', () => {
  //       let jsonReqBody;
  //       try {
  //         jsonReqBody = JSON.parse(requestData);
  //       } catch (e) {
  //         response.statusCode = 400;
  //         response.end(JSON.stringify({ err: 'you sent a bad request' }));
  //       }
  //       response.end(JSON.stringify(jsonReqBody));
  //     });
  //     break;
  //   }
  //   case 'application/x-www-form-urlencoded': {
  //     response.setHeader('Content-Type', 'text/plain');
  //     request.on('data', (data) => {
  //       requestData += data.toString('utf-8');
  //     });
  //     request.on('end', () => {
  //       response.end(requestData);
  //     });
  //     break;
  //   }
  //   case 'multipart/form-data':
  //     request.on('data', (data) => {
  //       requestData += data.toString();
  //     });
  //     response.end('you send a file');
  //     break;
  //   default:
  //     response.end('you send a illegal message');
  //     break;
  // }
});
server.listen(8989);
