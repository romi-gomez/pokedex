import { useEffect, useState } from 'react';

export const apiStates = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

export const GetApiData = (searchParams, limit)=> {
    const [data, setData] = useState({
        state: apiStates.LOADING,
        error: '',
        data: [],
    });

    const setPartData = (partialData) => setData({ ...data, ...partialData });
    const searchLimit = limit ? `?limit=${limit}` : "" 
    const url = `${process.env.REACT_APP_API}/${searchParams}${searchLimit}`

    useEffect(() => {
        setPartData({
            state: apiStates.LOADING,
        });
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPartData({
                    state: apiStates.SUCCESS,
                    data
                });
            })
            .catch(() => {
                setPartData({
                    state: apiStates.ERROR,
                    error: 'fetch failed'
                });
            });
    },[]);

    return data;
};
