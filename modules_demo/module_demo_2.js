console.log(require);

console.log('before require');

const moduleDemo1 = require('./module_demo');

console.log('after require');

moduleDemo1();
require('./module_demo'); // only first require does

console.log(require);
