

// 获取操作系统信息

import system, { version } from 'node:os'


// const osString = JSON.stringify(system, null, 2)
// console.log(osString)


const osInfo = {
    version: system.version(), // 系统版本信息
    platform: system.platform(), // 操作系统平台
    arch: system.arch(), // 系统架构
    hostname: system.hostname(), // 主机名
    uptime: system.uptime(), // 系统启动时间
    loadavg: system.loadavg(), // 系统负载
    totalmem: system.totalmem(), // 总内存
    freemem: system.freemem(), // 可用内存
    cpus: system.cpus(), // CPU信息
    networkInterfaces: system.networkInterfaces() // 网络接口信息
}

// console.log(osInfo);

//  用户信息
console.log(JSON.stringify(system.userInfo()));

//系统的版本
console.log(system.release());

//系统的类型
console.log(system.type());




