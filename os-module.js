// Built-in Modules
// OS
//Path
//FS
// Http
// there ae method and properties were provided in these modules
const { Console } = require('console');
const os=require('os');
// info about current user
const user=os.userInfo();  // userinfo is a method in os built in module
console.log(user);

// method returns stem uptime in secs
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),


}

console.log(currentOS);

