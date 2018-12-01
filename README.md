js-util-lib
==== 

> JavaScript 工具函数库

## Install

```sh
npm install --save js-util-lib
```

or

```sh
<script src="../../js.utils.lib.js"></script>
```

### 1. [jsUtilLib.query](https://github.com/dai1254473705/js-util-lib/tree/dev/src/query/index.js)

> + 获取当前浏览器url上的参数，或者指定链接的参数
> + 可以获取全部参数，或者指定参数

+ <a href="#query.getAllParams">jsUtilLib.query.getAllParams&nbsp;--&nbsp;获取url全部参数</a>
+ <a href="#query.getQueryString">jsUtilLib.query.getQueryString&nbsp;--&nbsp;获取url某个参数</a>

## 使用方法：

### jsUtilLib.query
---
### <h3 id="query.getAllParams">1. getAllParams<h3> 

> `jsUtilLib.query.getAllParams(url:String,cover:Boolean);`

+ `url` 选填，默认为当前页面的url
+ `cover` 默认为true, true 时会覆盖相同的key，false时会保留所有参数
+ 如：
+  url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
+   if `cover = true` : 
+      {aaa:4,bbb=3}
+   if `cover = false` :
+       {aaa:[1,4],bbb=3}  
	
```sh
	jsUtilLib.query.getAllParams(null,true);
	// 或者
	jsUtilLib.query.getAllParams();
	
```
	
### <h3 id="query.getQueryString">2.getQueryString<h3> 
 
> `jsUtilLib.query.getQueryString(name:String<required>,url:String);`

+ name : required 

```sh
	/**
     * Getting parameters from URL or custom string;
     * @param { String } `name` The key corresponding to the value you want;
     * @param { String } `url` 
     * @example :
     *  url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
     *  this.getQueryString('aaa'); // 4
     *  this.getQueryString('aaa','your custom url'); 
     */
jsUtilLib.query.getQueryString('sdf');
```
---