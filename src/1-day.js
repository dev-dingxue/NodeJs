
// 加密数据的测试


import CryptoJS from "crypto-js";




console.log("------------------- 加密数据测试 -------------------")


//  加密
const EncryptText = CryptoJS.AES.encrypt("my message", "secret key 123").toString();

//解密
const DecryptText = CryptoJS.AES.decrypt(EncryptText, "secret key 123").toString(CryptoJS.enc.Utf8);

console.log('加密数据：', EncryptText);

console.log('解密数据：', DecryptText);



console.log("------------------- SHA256 测试 -------------------");


//SHA256 加密

const SHA256Text = CryptoJS.SHA256("my message").toString();
console.log('SHA256 加密数据：', SHA256Text);

//SHA256 解密
const SHA256DecryptText = CryptoJS.SHA256(SHA256Text).toString();
console.log('SHA256 解密数据：', SHA256DecryptText);


console.log("------------------- MD5 测试 -------------------");

//MD5 加密
const MD5Text = CryptoJS.MD5("my message").toString();
console.log('MD5 加密数据：', MD5Text);

//MD5 解密
const MD5DecryptText = CryptoJS.MD5(MD5Text).toString();
console.log('MD5 解密数据：', MD5DecryptText);

console.log("------------------- 加密JSON数据测试 -------------------");

const jsonData = { name: 'John', age: 30 };

const encryptedJson = CryptoJS.AES.encrypt(JSON.stringify(jsonData), 'secret key 123').toString();
console.log('加密后的JSON数据：', encryptedJson);

const decryptedJson = JSON.parse(CryptoJS.AES.decrypt(encryptedJson, 'secret key 123').toString(CryptoJS.enc.Utf8));
console.log('解密后的JSON数据：', decryptedJson);


console.log("------------------- sha384加密数据测试 -------------------");
const sha384Text = CryptoJS.SHA384("my message").toString();
console.log('加密后的数据：', sha384Text);

const sha384Text2 = CryptoJS.SHA384("my message").toString();
console.log('解密后的数据：', sha384Text2);





