import axios from "axios";
export function newaxios(){
    return new Promise((resolve,reject)=>{
        axios({
            url:"",
            method:"get",
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err);
        })
    })
} 