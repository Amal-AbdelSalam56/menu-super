import axios from "axios";

const instance = axios.create({
  baseURL: 'https://menu.alwafierp.com/api/',
});

//   instance.interceptors.request.use(function(config){

//     store.dispatch(changeLoader(true))
// return config;

//   },function(error){

//     return Promise.reject(error)
//   })

//   instance.interceptors.response.use(function(response){
//     store.dispatch(changeLoader(false))
//     return response
//   },function(error){
//     return Promise.reject(error)
//   })




export default instance