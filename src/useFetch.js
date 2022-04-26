import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw Error('could not fetch resource');
            }
            return res.json();
        }) 
        .then((data) => {
            // console.log(data);
            setdata(data);
            seterror(null);
        })
        .catch((err) => {
            seterror(err.message);
        })
    }, [url]);

    return {data, error};
}


export default useFetch;