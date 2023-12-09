const os = require('os');

const platform = os.platform();
console.log(platform); 

const arch = os.arch();
console.log(arch);

const cpus = os.cpus();
console.log(cpus);

const freemen = os.freemem();
console.log(freemen);

const type = os.type();
console.log(type);

const info = os.userInfo();
console.log(info);

const upTime = os.uptime();
console.log(upTime);

const version = os.version();
console.log(version);

const totalmem = os.totalmem();
console.log(totalmem);

const tmpdir = os.tmpdir();
console.log(tmpdir);

const release = os.release();
console.log(release);

const availableParallelism = os.availableParallelism();
console.log(availableParallelism);

const hostName = os.hostname();
console.log(hostName);

const loadAvg = os.loadavg();
console.log(loadAvg);

const machine = os.machine();
console.log(machine);