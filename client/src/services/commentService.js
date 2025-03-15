import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(stadiumId) {
        const comments = await request.get(baseUrl)

        const stadiumComments = Object.values(comments).filter(comment => comment.stadiumId === stadiumId)

        return stadiumComments;
    },
    create(email, stadiumId, comment) {
        return request.post(baseUrl, { email, stadiumId, comment })
    }
}