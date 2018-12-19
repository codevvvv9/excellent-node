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
  let userName = '';
  let user = '';
  let requestData = '';
  switch (requestUrl.pathname) {
    case '/user':
      switch (method) {
        case 'GET':
          userName = requestUrl.query.name ? requestUrl.query.name : '';
          user = users.find(userItem => userItem.name === userName);
          response.end(JSON.stringify(user));
          break;
        case 'POST':
          request.on('data', (data) => {
            requestData += data.toString('utf-8');
          });
          request.on('end', () => {
            let userStr;
            try {
              userStr = JSON.parse(requestData);
            } catch (e) {
              response.statusCode = 400;
              response.end(JSON.stringify({ err: 'you sent a bad request' }));
            }
            users.push(userStr);
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
  parseUrl(request, response);
});
server.listen(8989);
