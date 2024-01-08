import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8082/api/cars")
    }

    getProductById(id){
        return axios.get("http://localhost:8082/api/cars/getById/" + id)
    }
}