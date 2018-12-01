/**
 * jsUtilLib
 * daiyunzhou 2018-11-29 19:28
 * @class jsUtilLib
 * 
 */
'use strict';

export default class JsUtilLib {
  constructor (props) {
    this.showLogger = true;

    // 正则表达式
    this.regExp = {
      mobile: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, // 2018 12月最新
      tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
      email: /^\w{3,}@\w+(\.\w+)+$/,
      idCardNum: [/^[0-9]{15}$/,/^[0-9]{17}[0-9xX]$/], //15 || 18 位身份证
      bankCardNum: /^([1-9]{1})(\d{15}|\d{18})$/,// 银行卡号
      url: /^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,// url
      enString: /^[a-z,A-Z]+$/,// 英文大小写
    };
    this.logger = this.logger.bind(this);
  }
  
  // 警告日志开关
  logger (msg){
    if (this.showLogger) {
      console.warn(msg);
    }
  }
}
