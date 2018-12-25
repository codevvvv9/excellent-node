const http = require('http');
// 解析url中？之后的键值对
const url = require('url');
const parseUrl = require('./parseUrl');

const users = [];
// 假设里面的用户是如下结构
// const user = {
//   name: 'shao',
//   age: 19,
// }
const server = http.createServer();
server.on('request', (request, response) => {
  parseUrl(request, response);
});
server.listen(8989);
