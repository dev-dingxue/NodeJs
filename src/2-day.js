
// fs 库操作文件

import fs from 'fs';
import path from 'path';



//文件路径
const pathName = path.resolve("../public/", 'test.txt');


const isFileExit = fs.existsSync(pathName);

if (isFileExit) {
    console.log('文件已存在');
} else {
    console.log('文件不存在');
}


//设置文件权限
// fs.fchownSync(pathName, 0, 0, function (err) {
// })



// 创建文件
fs.writeFileSync(pathName, 'hello world', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('创建成功');
    }
});

//读取文件内容
fs.readFile(pathName, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 追加文件内容
fs.appendFile(pathName, 'hello world s ss', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('追加成功');
    }
});

// //删除文件内容
// fs.writeFile(pathName, '', function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('删除文件内容成功');
//     }
// });



