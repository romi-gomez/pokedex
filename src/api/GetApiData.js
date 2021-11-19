import { useState, useEffect } from 'react';

function GetApiData(searchParams, limit) {
    const [searchedData, setSearchedData] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API}/${searchParams}/&limit=${limit}`;

        async function fetchData() {
            try {
                await fetch(url)
                    .then(response => response.json())
                    .then(data => setSearchedData(data));
            } catch (err) {
                console.log("Hubo un error al buscar")
                console.log(err)
            }
        }

        fetchData();
    }, []);

    return searchedData;
}

export default GetApiData;