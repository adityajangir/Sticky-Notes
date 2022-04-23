import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Notelist = (props) => {
    const notes = props.notes;
    const Navigate = useNavigate();
    const handleclick = (id) => {
        fetch('http://localhost:8000/notes/' + id, {
            method: "DELETE"
        }).then(() => {
            console.log("delete clicked")
            Navigate(0);
        })
    }

    return ( 
        <div className='note-div flex flex-row flex-wrap'>
            {   
                notes.map((note)=>(
                    <div className='note-preview inline-block m-4 p-4 bg-orange-200 rounded-md w-60' key={note.id}>
                        <Link to={ `note/${note.id}`}> 
                            <span className='bg-gray-500 text-white rounded-md pl-2 pr-2 pt-1 pb-1'>{ note.domain }</span>
                            <p className="mt-2">{ note.description }</p>
                        </Link>
                            <div className="justify-between flex">
                                <span className="text-sm">-{ note.user }</span>
                                <span><button onClick={() => handleclick(note.id)}><i class="bi bi-trash-fill"></i></button></span>
                            </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Notelist;