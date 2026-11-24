//GLOBALS - NO Winfow

/*__dirname -> path to current directory
__filename -> file name
require -> function to use modules (CommonJS)
module -> info about current module (file)
process -> info about enviroment where
    the program is executed
*/

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('hello world')
},3)