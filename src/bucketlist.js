// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Notelist from "./notelist";
import useFetch from "./useFetch";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const BucketList = (props) => {
    const buckets = props.buckets;
    const {data: notes, error} = useFetch('http://localhost:8000/notes')
    // console.log(notes);
    


    return ( 
        <div>
                        <div className="groups flex flex-wrap place-content-center">
                            {
                                buckets.map((bucket)=>(
                                    <Droppable droppableId={ String(bucket.id) }>
                                    {provided => 
                                        <div {...provided.droppableProps} ref={provided.innerRef} className='bg-slate-200 basis-[55%] p-5 m-5 rounded-md mt-20' key={bucket.id}>
                                            <h1 className="text-2xl font-bold mb-2">{ bucket.name }</h1>
                                            {error && <div>{error}</div>}
                                            {notes && <Notelist notes={notes.filter((note) => note.grp == `${bucket.name}`)} bucket={bucket} title="All notes"></Notelist>}
                                            { provided.placeholder }
                                        </div>
                                    }
                                    </Droppable>
                                ))
                            }
                        </div>
                    
            </div>
     );
}
 
export default BucketList;