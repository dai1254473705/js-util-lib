/**
 * check data 
 * 判断数据是否符合标准
 * daiyunzhou 2018-12-01 12：34
 * last modify author : daiyunzhou
 * last modify time : 2018-12-01 12：34
 */
'use strict';
import JsUtilLib from '../_init';

/**
 * GUID(hex):
 *    xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export default class GUID extends JsUtilLib {
    constructor (){
        super();
    }

    // 生成guid
    get (){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}