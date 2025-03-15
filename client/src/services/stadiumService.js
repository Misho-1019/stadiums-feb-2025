import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/stadiums';

export default {
    async getAll() {
        const stadiums = await request.get(baseUrl)

        const result = Object.values(stadiums);

        return result;
    },
    getOne(stadiumId) {
        return request.get(`${baseUrl}/${stadiumId}`)
    },
    create(stadiumData) {
        return request.post(baseUrl, stadiumData)    
    }
}