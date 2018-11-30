/**
 * jsUtilLib
 * daiyunzhou 2018-11-29 19:28
 * @class jsUtilLib
 * 
 */
'use strict';

export default class jsUtilLib {
  constructor (props) {
    this.showLogger = true;
  }
  logger (msg){
    if (this.showLogger) {
      console.warn(msg);
    }
  }
}
