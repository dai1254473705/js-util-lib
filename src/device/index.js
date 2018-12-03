/**
 * device 
 * 获取当前浏览器设备信息
 * daiyunzhou 2018-12-03 15：04
 * last modify author : daiyunzhou
 * last modify time : 2018-12-03 15：04
 */
'use strict';
import JsUtilLib from '../_init';


export default class device extends JsUtilLib {
    constructor (){
        super();
        this.state = {
            agent: navigator.userAgent.toLowerCase()
        };
    }
    /**
     * find userAgent
     */
    find (needle) {
        return this.state.agent.indexOf(needle) !== -1;
    }
    // windows 
    windows (){
        return this.find('windows');
    }
    
    // mac
    macos  (){
        return find('mac');
    }
    
    /**
     * is ios 
     * 判断是否是ios设备
     */
    ios (){
        try {
            return /ipod|ipad/.test(this.state.agent) ||( !/windows/.test(this.state.agent) && /iphone/.test(this.state.agent) );
        } catch (error) {
            this.logger(error);
            return false;
        }
    }
    /**
     * is android 
     * 判断是否是android设备
     */
    android (){
        try {
            return !this.find('windows') && this.find('android');
        } catch (error) {
            this.logger(error);
            return false;
        }
    }
    /**
     * is windows phone
     * 判断是不是windowPhone
     */
    windowPhone (){
        try {
            return this.find('windows') && this.find('phone');
        } catch (error) {
            this.logger(error);
            return false;
        }
    }
    /**
     * 获取当前浏览器环境 
     * mobile|pc
     */
    type (){
        try {
            if ((/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) ) {
                return 'mobile';
            } 
            return 'pc';
        } catch (error) {
            this.logger(error);
            return '';
        }
    }
    /**
     * 获取当前浏览器信息
     * ios|android|windowphone|windows|macos
     */
    os (){
        try {
            if (this.ios()) {
                return 'ios';
            }
            if (this.android()){
                return 'android';
            }
            if (this.windowPhone()){
                return 'windowphone';
            }
            if (this.windows()){
                return 'windows';
            }
            if (this.macos()){
                return 'macos';
            }
            return '';
        } catch (error) {
            this.logger(error);
            return '';
        }
    }
}