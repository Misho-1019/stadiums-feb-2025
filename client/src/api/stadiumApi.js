import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/stadiums';

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

export const useLatestStadiums = () => {
    const [latestStadiums, setLatestStadiums] = useState([])

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3, 
            select: '_id,imageUrl,name'
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestStadiums)
    }, [])

    return {
        latestStadiums,
    }
}

export const useStadium = (gameId) => {
    const [stadium, setStadium] = useState({})

    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`)
            .then(setStadium)
    }, [gameId])

    return {
        stadium,
    }
}

export const useCreateStadium = () => {
    const { request } = useAuth();

    const create = (stadiumData) =>
        request.post(baseUrl, stadiumData)

    return {
        create,
    }
}

export const useEditStadium = () => {
    const { request } = useAuth();

    const edit = (stadiumId, stadiumData) =>
        request.put(`${baseUrl}/${stadiumId}`, { ...stadiumData, _id: stadiumId})

    return {
        edit,
    }
}

export const useDeleteStadium = () => {
    const { request } = useAuth();

    const deleteStadium = (stadiumId) => 
        request.delete(`${baseUrl}/${stadiumId}`)

    return {
        deleteStadium,
    }
}