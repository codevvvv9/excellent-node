const http = require('http');
// 解析url中？之后的键值对

const parseUrl = require('./parseUrl');

// console.dir(require);// 很多东西，Module、cache属性很有用

// const users = [];
// 假设里面的用户是如下结构
// const user = {
//   name: 'shao',
//   age: 19,
// }
// const { parseUrl } = { parserUrl: parseObject.parseObject.parseUrl };
// console.dir(parseUrl);

const server = http.createServer();
server.on('request', (request, response) => {
  parseUrl(request, response);
});
server.listen(8989);
