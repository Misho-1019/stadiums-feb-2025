import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/stadiums';

export default {
    create(stadiumData) {
        return request.post(baseUrl, stadiumData)    
    }
}