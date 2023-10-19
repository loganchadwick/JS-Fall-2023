let coder = "I am a good programmer";
console.log(`coder -> ${coder}`);
console.log (typeof coder);
console.log(`Length = ${coder.length}`);
let coder_U = coder.toUpperCase();
console.log(`coder_U -> ${coder_U}`);
let coder_L = coder.toLowerCase();
console.log(`coder_L -> ${coder_L}`);
let coderIncludes = coder.includes('good');
console.log(`Does ${coder} include 'good': ${coderIncludes}`);
const subString = coder.replace("programmer","");
console.log(`coder with programmer sliced out -> ${subString}`);
let coderEndsWithProgrammer = coder.endsWith('programmer');
console.log(`Does ${coder} end with 'programmer': ${coderEndsWithProgrammer}`);
let index = coder.indexOf('good');
if (index !== -1) {
    coder = coder.slice(0, index) + ',' + coder.slice(index);
}
const coder_split = coder.split(', ');
console.log(`Split by comma before "good": -> ${coder_split}`);


