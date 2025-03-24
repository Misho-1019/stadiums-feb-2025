import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/stadiums';

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
    },
    edit(stadiumId, stadiumData) {
        return request.put(`${baseUrl}/${stadiumId}`, { ...stadiumData, _id: stadiumId })
    },
    delete(stadiumId) {
        return request.delete(`${baseUrl}/${stadiumId}`)
    }
}

export const useStadiums = () => {
    const [stadiums, setStadiums] = useState([])

    useEffect(() => {
        request.get(baseUrl)
            .then(setStadiums)
    }, [])

    return {
        stadiums,
    }
}

export const useCreateStadium = () => {
    const { accessToken } = useContext(UserContext)

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    const create = (stadiumData) =>
        request.post(baseUrl, stadiumData, options)

    return {
        create,
    }
}