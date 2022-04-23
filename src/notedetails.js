import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Notedetails = () => {

    const { id } = useParams();
    const {notes, error} = useFetch('http://localhost:8000/notes/' + id);
     console.log(notes);

    return ( 
        <div>
            { notes && <div className="p-5 m-5">
                <h1 className="text-3xl"> { notes.domain } </h1>
                <p>{notes.description}</p>
                <span>- { notes.user }</span>
            </div> }
        </div>
     );
}
 
export default Notedetails;