# Meteor-Starter for angular2

1.安装Meteor
Linux或Mac命令行安装:
  $ curl https://install.meteor.com/ | sh
Windows安装:
  https://www.meteor.com/install
2.创建项目
  meteor create socially
3.运行项目
  cd socially => meteor => http://localhost:3000/访问
4.初始化package.json
  npm init
  npm install angular2-meteor --save
  npm install angular2-meteor-auto-bootstrap --save
5.安装typescript\typings
  npm install typings typescript -g --save
  初化化tsconfig.json=>typescript init
  配置tsconfig.json
    {
    "compilerOptions": {
     "experimentalDecorators": true,
      "module": "commonjs",
      "target": "es5",
      "isolatedModules": false,
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "removeComments": false,
      "noImplicitAny": false,
    "sourceMap": true
    },
    "files": [
      "typings/party.d.ts",
      "typings/main.d.ts",
      "typings/angular2-meteor/angular2-meteor.d.ts"
    ]
  }
初始化typings.json => typings init
  npm install typings -g
  typings install es6-promise --save
  typings install es6-shim --ambient --save
  typings install meteor --ambient --save(-S)

6.添加 Angular2
  meteor add angular2-compilers
  meteor remove blaze-html-templates
  meteor npm install --save angular2-meteor
  meteor npm install --save meteor-node-stubs
  meteor npm install angular2-meteor-auto-bootstrap --save
  
  
