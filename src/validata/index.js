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
 * @class Validata 
 * @method { Function } isNull 是否为空||undefined || null
 * @method { Function } isString 是否是字符串
 * @method { Function } isMobile 判断是否是手机号
 * @method { Function } isTelephone 判断是否是座机号
 * @method { Function } isIdCardNum 判断是否是身份证号
 * @method { Function } isBankCardNum 判断是否是银行卡号
 * @method { Function } isEmail 判断是否是邮箱
 * @method { Function } isEnString 判断是不是都是字母
 * @method { Function } isZhString 判断是不是都是中文
 * @method { Function } isUrl 判断是不是url地址
 */
export default class Validata extends JsUtilLib {
    constructor (){
        super();
    }

    // 是否为空
    isNull (data){
        try {
            if (data === undefined || data === null || data === '') {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return true;
        }
    }
    // 是否是字符串 string 
    isString (str){
        try {
            if (Object.prototype.toString.call(str) === '[object String]'){
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        }
    }

    // 是否是数组 array

    // 是否是对象 object

    // 是否是布尔类型 boolean

    // 判断是否是手机号
    isMobile (str) {
        try {
            if ( this.isNull(str) ) {
                return false;
            }
            if ( this.regExp.mobile.test(str) ) {
                return true;
            } 
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        }
    }

    // 判断是否是座机号 010-51662227
    isTelephone (str) {
        try {
            if ( this.isNull(str) ) {
                return false;
            }
            if ( this.regExp.tel.test(str) ) {
                return true;
            } 
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        }
    }

    // 判断是否是身份证号
    isIdCardNum (str) {
        try {
            if ( this.isNull(str) ) {
                return false;
            }
            if ( this.regExp.idCardNum[0].test(str) || this.regExp.idCardNum[1].test(str) ) {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        }
    }

    // 判断是否是银行卡号
    isBankCardNum (str) {
        try {
            if ( this.isNull(str) ) {
                return false;
            }
            if ( this.regExp.bankCardNum.test(str) ) {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        }
    }

    // 判断是否是邮箱
    isEmail (str) {
        try {
            if ( this.isNull(str) ) {
                return false;
            } 
            if ( this.regExp.email.test(str) ) {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        }
    }

    // 判断是不是都是字母
    isEnString (str){
        try {
            if ( this.isNull(str) ) {
                return false;
            } 
            if ( this.regExp.enString.test(str) ) {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        } 
    }

    // 判断是不是都是中文
    isZhString (str){   
        try {
            if ( this.isNull(str) ) {
                return false;
            } 
            if ( this.regExp.zhString.test(str) ) {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        } 
    }

    // 判断是不是网址
    isUrl (str){   
        try {
            if ( this.isNull(str) ) {
                return false;
            } 
            if ( this.regExp.url.test(str) ) {
                return true;
            }
            return false;
        } catch (error) {
            this.logger(error);
            return false;
        } 
    }
}