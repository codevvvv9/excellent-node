/* eslint-disable prefer-destructuring */
// console.log('before exports');

// module.exports = () => console.log('hi I\'m module demo1');

// console.log('after exports');
/**
 * the define of exports
 */
// exports = module.exports; // exports is actually a module.exports reference.
// exports.a = 1;
// console.log(exports); // { a: 1}
// console.log(module.exports); // { a: 1}
/**
 * change modules.exports reference
 */
exports.a = 1;
module.exports = { b: 2 };
// console.log(exports); // { a: 1}
// console.log(module.exports); // { a: 1 }
