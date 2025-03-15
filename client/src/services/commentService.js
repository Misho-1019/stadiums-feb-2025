import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, stadiumId, comment) {
        return request.post(baseUrl, { email, stadiumId, comment })
    }
}