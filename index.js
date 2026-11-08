const os = require('node:os');  //importing the os module from Node.js

console.log(os.platform()); //logging the platform of the operating system
console.log(os.arch()); //logging the architecture of the operating system
//console.log(os.cpus()); //logging the number of CPUs in the operating system
console.log(os.freemem() / 1024 / 1024); //logging the free memory of the operating system in MB
console.log(os.totalmem() / 1024 / 1024); //logging the total memory of the operating system in MB
console.log ("horas encendido: " , os.uptime() / 60 / 60); //logging the uptime of the operating system in hours
