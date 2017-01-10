# Express Rest Api

本项目是后端rest api 模板项目

## 技术栈
- nodejs
- express
- mongodb
- mocha

## 项目简介
- 使用ES6/ES7特性
- 使用ESlint进行语法检测，遵循[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## 开发、测试、打包命令
``` bash
# 配置mongodb，添加用户
# 在config.js 文件中的配置如下
mongodb: {
  host: 'localhost',
  database: 'express-rest-api',
  user: 'user',
  password: 'password'
}
  
# 安装依赖
yarn

# 运行
npm run start

# 构建
npm run build

# 测试
npm run test
```

## 项目结构
```
/src              项目源码文件夹
  /models         使用mongoose定义的model的目录
  /routes         项目路由文件目录
  /utils          封装的工具函数目录
config.js         配置文件
log.js            export了一个log模块
main.js           程序入口文件
```