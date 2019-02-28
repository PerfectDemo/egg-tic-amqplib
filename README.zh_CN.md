# egg-tic-amqplib

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tic-amqplib.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tic-amqplib
[travis-image]: https://img.shields.io/travis/eggjs/egg-tic-amqplib.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-tic-amqplib
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-tic-amqplib.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-tic-amqplib?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-tic-amqplib.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-tic-amqplib
[snyk-image]: https://snyk.io/test/npm/egg-tic-amqplib/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tic-amqplib
[download-image]: https://img.shields.io/npm/dm/egg-tic-amqplib.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tic-amqplib

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-tic-amqplib 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

### 安装
`npm i egg-tic-amqplib --save`


### 插件引入
在`plugin.js`文件中加入一下代码
```
exports.eggTicAmqplib = {
    enable: true,
    package: 'egg-tic-amqplib'
};
```

### 配置文件
`config.default.js`
```
 config.amqplib = {
        client: {
            // url: 'amqp://localhost',
            connectOptions: {
                protocol: 'amqp', 
                hostname: '127.0.0.1',
                port: 5672,
                username: 'guest',
                password: 'guest123',
                locale: 'zh_CN',
                frameMax: 0,
                heartbeat: 0,
                vhost: '/'
            }
            // socketOptions: {
            //   cert: certificateAsBuffer, // client cert
            //   key: privateKeyAsBuffer, // client key
            //   passphrase: 'MySecretPassword', // passphrase for key
            //   ca: [caCertAsBuffer], // array of trusted CA certs
            // },
        }

    };
```

### 使用方法
该库进行[amqplib](http://www.squaremobius.net/amqp.node/channel_api.html)进行封装
具体操作方法可点击链接查看文档。
插件引入后，app.amqplib为amqplib.connect方法创建的对象
可在定时器或者controller或service中app.amqplib直接访问
* app.js下无法直接访问到app.amplib, 因为amqplib.connect为异步方法

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
