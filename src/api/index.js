import {post} from './helepers'

const NumPost=function (c) {
    return post(process.env.VUE_APP_URL+`/v1/issue/history/${c}`,{
        sAsc: false,
        orderBy: '',
        pageNo: 1,
        pageSize: 100
    })
}
const NavPost=function (n) {
    return  post(process.env.VUE_APP_URL+'/v1/lottoInfo/page', {
        lotto_classify: n,
            pageNo: 1,
            pageSize: 10
    })
}
const contactPost=function (data) {
    return  post('http://introduce.cker2123.com/api/introduce/PlatformCustomer', data)
}
//格式化时间
const getNowFormatDate=function(e){
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (e) {
        strDate = strDate + ' ' + '23:59'
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}


export {NumPost,NavPost,getNowFormatDate,contactPost}
