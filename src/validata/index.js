/**
 * check data 
 * 判断数据是否符合标准
 * daiyunzhou 2018-12-01 12：34
 * last modify author : daiyunzhou
 * last modify time : 2018-12-01 12：34
 */
'use strict';
import JsUtilLib from '../_init';

export default class Validata extends JsUtilLib {
    constructor (){
        super();
    }

    // 是否为空
    isNull (data){
        try {
            if (data === undefined || data === null || data === '' || isNaN(data)) {
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
}