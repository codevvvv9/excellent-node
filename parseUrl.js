const url = require('url');

const users = [];
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
          if (user) {
            response.end(JSON.stringify(user));
          } else {
            response.end(JSON.stringify({ result: 'there isn\'t this user' }));
          }
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
      response.end(JSON.stringify({
        status: 'not found page',
      }));
      break;
  }
};
module.exports = parseUrl;
