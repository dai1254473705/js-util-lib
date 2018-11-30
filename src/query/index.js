/**
 * query 
 * daiyunzhou 2018-11-29 20:12 
 * last modify author : daiyunzhou
 * last modify time : 2018-11-29 20：13
 */
import jsUtilLib from '../_init';

export default class Query extends jsUtilLib {
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
            // if (!url) throw new Error('url is not defined');
            if (!url){
                url = this.href;
            }
            let query = url.replace(/.*\?/i, '');
            //([^=&]*)匹配不是=或者&的
            let reg = /([^=&]*)(=)([^=&]*)/g;
            let obj = {};
            let res =null;
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
     * 
     */
}