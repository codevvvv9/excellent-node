const http = require('http');
// 解析url中？之后的键值对
const url = require('url');
const parseObject = require('./parseUrl');

const users = [];
// 假设里面的用户是如下结构
// const user = {
//   name: 'shao',
//   age: 19,
// }
const { parseUrl } = { parseUrl: parseObject.parseUrl };
const server = http.createServer();
server.on('request', (request, response) => {
  parseUrl(request, response, url, users);
});
server.listen(8989);
