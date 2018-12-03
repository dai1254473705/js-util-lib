/**
 * img 
 * 图片处理
 * daiyunzhou 2018-12-03 12：29
 * last modify author : daiyunzhou
 * last modify time : 2018-12-03 12：29
 */
'use strict';
import JsUtilLib from '../_init';
import Validata from '../validata';

/**
 * @class ImageLib 
 * @method { Function } base64 图片转base64
 */
export default class ImageLib extends JsUtilLib {
    constructor (){
        super();
    }

    /**
     * image to base64
     * data:[<mediatype>][;base64],<data>
     * @param {String} url 图片地址
     * @param {Function} callback `(error,data)`回调函数 
     * @param {Float} quality 压缩比例
     */
    base64 (url, callback, quality = 1){
        try {
            var img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            var timestamp = new Date().getTime();
            img.src = url + '?' + timestamp;
            img.onload = function (data){
                console.log(data);
                var canvas = document.createElement('canvas');
                var width = img.width;
                var height = img.height;
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                var dataurl = canvas.toDataURL('image/jpeg', quality);
                // console.log(new Blob([dataurl]).size);
                callback(null,dataurl);
            };
        } catch (error) {
            this.logger(error);
            callback(error,null);
        }
    }

    /**
     * 获取图片大小
     * @param {String} url 图片地址
     * @param {String} callback `(error,data)`回调函数 
     * 
     * callback:
     * { width: width,height: height}
     */
    size (url,callback){
        try {
            var img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            var timestamp = new Date().getTime();
            img.src = url + '?' + timestamp;
            img.onload = function (data){
                var width = img.width;
                var height = img.height;
                callback(null,{
                    width: width,
                    height: height
                });
            };
        } catch (error) {
            this.logger(error);
            callback(error,null);
        }
    }
}