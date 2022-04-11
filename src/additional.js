const singleQuotedString = 'String test string';
const doubleQuotedString = "String \n \t \\test\"\' string";
const patternString = `String ${doubleQuotedString}
 test string`;

console.log(patternString);
console.log(doubleQuotedString);

console.log(patternString.length);
console.log(patternString[9]);
console.log(patternString.charAt(9));
console.log(patternString.charAt(400));
console.log(patternString[400]);
patternString[9] = 3;
console.log(patternString);

console.log(singleQuotedString.toUpperCase());
console.log(singleQuotedString.toLowerCase());

console.log(singleQuotedString.indexOf('r'));
console.log(singleQuotedString.indexOf('r', 4));
console.log(singleQuotedString.indexOf('R', 4));

console.log(singleQuotedString.lastIndexOf('r'));
console.log(singleQuotedString.lastIndexOf('r', 4));
console.log(singleQuotedString.lastIndexOf('D', 15));

console.log(singleQuotedString.includes('Test'));
console.log(singleQuotedString.includes('test'));


console.log(singleQuotedString.startsWith('test'));
console.log(singleQuotedString.endsWith('test'));

const string = 'stringVeryLongWithManyWords';

console.log(string.slice(9, 17));
console.log(string.slice(9));
