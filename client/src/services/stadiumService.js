const baseUrl = 'http://localhost:3030/jsonstore/stadiums';

export default {
    async create(stadiumData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stadiumData),
        })

        const result = await response.json()

        return result;
    }
}