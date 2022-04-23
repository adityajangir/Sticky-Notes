import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [notes, setnotes] = useState(null)
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
            setnotes(data);
            seterror(null);
        })
        .catch((err) => {
            seterror(err.message);
        })
    }, [url]);

    return {notes, error};
}


export default useFetch;