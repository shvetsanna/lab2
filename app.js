 const { MathUtils, StringUtils } = require("../src");

const math = new MathUtils();
const str = new StringUtils();

console.log(math.add(5, 3));
console.log(math.square(4));

console.log(str.toUpper("hello"));
console.log(str.length("Anna"));