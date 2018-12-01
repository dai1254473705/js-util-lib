/**
 * query 
 * url query参数处理
 * daiyunzhou 2018-11-29 20:12 
 * last modify author : daiyunzhou
 * last modify time : 2018-12-01 12：13
 */
'use strict';
import JsUtilLib from '../_init';

export default class Query extends JsUtilLib {
    constructor () {
        super();
        this.href = window.location.href;
    }

    /**
     * get all the query params from location or custom
     * @param { String } `url` Url to be processed
     * @param { Boolean } `cover` default is true , if set the value to false, the same key while to be the Array 
     * @return { Object } 
     * @example :
     *  url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
     *  if `cover = true` : 
     *      {aaa:4,bbb=3}
     *  if `cover = false` :
     *      {aaa:[1,4],bbb=3}
     */
    getAllParams ( url= this.href ,cover= true){
        try {
            if (!url){
                url = this.href;
            }
            let query = url.replace(/.*\?/i, '');
            //([^=&]*) match not `=` or `&`;
            let reg = /([^=&]*)(=)([^=&]*)/g;
            let obj = {};
            let res = null;
            while ( res = reg.exec(query) ) {
                if (cover) {
                    obj[res[1]] = res[3];
                } else {
                    if (obj[res[1]] && typeof obj[res[1]] === 'string'){
                        let name = obj[res[1]];
                        obj[res[1]] = new Array();
                        obj[res[1]].push(name);
                        obj[res[1]].push(res[3]);
                    } else if (obj[res[1]] && typeof obj[res[1]] === 'object') {
                        obj[res[1]].push(res[3]);
                    } else {
                        obj[res[1]] = res[3];
                    }
                }
            }
            return obj;
        } catch (error) {
            this.logger(error);
            return {};
        }
    }

    /**
     * Getting parameters from URL or custom string;
     * @param { String } `name` [required]  The key corresponding to the value you want;
     * @param { String } `url` 
     * @example :
     *  url = 'http://js/utils/lib?aaa=1&bbb=3&aaa=4'
     *  this.getQueryString('aaa'); // 4
     *  this.getQueryString('aaa','your custom url'); 
     */
    getQueryString (name,url = this.href) {
        try {
            if (!name) throw new Error('name is not defined!');
            let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            let query = url.replace(/.*\?/i, '');
            let param = query.match(reg);
            if ( param ) {
                return param[2];
            } else {
                return '';
            }
        } catch (error) {
            this.logger(error);
            return '';
        }
    } 
}