# js-util-lib
---

## Install

```sh
npm install --save js-util-lib
```

### 方法

### 1. jsUtilLib.query

> 获取当前浏览器url上的参数，或者指定链接的参数
> jsUtilLib.query.getAllParams

#### 使用方法：
	
	>  `url` 选填，默认为当前页面的url
	  `cover` 默认为true, true 时会覆盖相同的key，false时会保留所有参数
	   如：
	   url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
       if `cover = true` : 
          {aaa:4,bbb=3}
       if `cover = false` :
           {aaa:[1,4],bbb=3}  
	 
	
	```
	jsUtilLib.query.getAllParams(url:String,cover:Boolean});
	// 或者
	jsUtilLib.query.getAllParams(null,true);
	// 或者
	jsUtilLib.query.getAllParams();
	```