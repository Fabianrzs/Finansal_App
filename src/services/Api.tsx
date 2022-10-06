import axios, { AxiosRequestConfig } from "axios";

export default {
  async apiRestGet<TEntity>(path:string, body:{}): Promise<TEntity> {
    try {
      const requestOptions: AxiosRequestConfig = {
        params: body
      }
      return await axios.get(path, requestOptions)
    } catch (err) {
      console.log(err);
      throw { err }
    }
  },
  async apiRestPost<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      const requestOptions: AxiosRequestConfig = {
        params: body
      }
      return await  axios.post(path, requestOptions)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
  async apiRestPut<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      const requestOptions: AxiosRequestConfig = {
        params: body
      }
      return await  axios.put(path, requestOptions)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
  async  apiRestpatch<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      const requestOptions: AxiosRequestConfig = {
        params: body
      }
      return await  axios.patch(path, requestOptions)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
  async  apiRestDelete<TEntity>(path:string, body:{}): Promise<TEntity>{
    try {
      const requestOptions: AxiosRequestConfig = {
        params: body
      }
      return await  axios.delete(path, requestOptions)
    }catch (err){
      console.log(err);
      throw {err}
    }
  },
}
