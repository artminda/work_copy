import axios from 'axios'

export function post(url,data) {
    return axios({
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'post',
        url,
        data,
    }).then(res=>{
        const {status,data}=res
        if (status==200){
            return data.data
        }
    }).catch((err)=>{
        throw new Error('err')
    })

}
