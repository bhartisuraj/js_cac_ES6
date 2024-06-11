const name = 'suraj'
const repoCount = 50
// console.log(name + repoCount + ' Value'); // Old syntax
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Backticks(``) String interpolation

const gameName = new String('surajsb')

// console.log(typeof gameName)
// console.log(gameName[3])
// console.log(gameName.__proto__)
// console.log(gameName[3].toUpperCase())

// console.log(gameName.length)

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

// const newString = gameName.substring(0, 4) // Takes starting number but do -1 of last number Eg. sura
// console.log(newString);

const anotherString = gameName.slice(-7, 2) // Same as substring but here you can provide negative value. Took -7 negative value as zero and go till index (2-1) Eg. su
console.log(anotherString);

// const spaceName = '   suraj   '; // Trim():- removes space from start & end
// console.log(spaceName.trim());

// const url = 'http://suraj.com/suraj%20bharti'
// console.log(url.replace('%20','_')); // replace given text with given text
// console.log(url.includes('saurab')); // includes check whether given word is present or not

// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.split(' ')); // split seprates given text/sentence into arrays list based on give text/symbol and number of arrays console.log(str.split('seprators', limit));