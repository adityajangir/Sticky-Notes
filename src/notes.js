// import { useState, useEffect } from 'react'
import Notelist from './notelist';
import useFetch from './useFetch';


const Notes = () => {

    const {notes, error} = useFetch('http://localhost:8000/notes')
    return ( 
        <div>
            {error && <div>{error}</div>}
           {notes && <Notelist notes={notes} title="All notes"></Notelist>}
           {/* {notes && <Notelist notes={notes.filter((note) => note.domain == filter)} title="All notes"></Notelist>} */}

            {/* <Notelist notes={notes.filter((note) =>note.domain == 'Services')} title="All notes"></Notelist>
            <Notelist notes={notes.filter((note) =>note.domain == 'Risk')} title="All notes"></Notelist>
            <Notelist notes={notes.filter((note) =>note.domain == '')} title="All notes"></Notelist> */}
            {/* <Notelist notes={notes} title="All notes"></Notelist> */}
        </div>
     );
}
 
export default Notes;