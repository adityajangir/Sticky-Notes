import useFetch from "./useFetch";
import BucketList from "./bucketlist";
import Navbar2 from "./nav2.js";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { useState } from "react";


const Groups = () => {

    const {data: notes, error} =  useFetch('http://localhost:8000/notes');
    const {data: buckets, err} =  useFetch('http://localhost:800/buckets');
    console.log(buckets);

    const columnsFromBackend = {
        [uuid()]:
          {
            "name": "Goals/Needs",
            "items": notes
          },
         [uuid()]: {
            "name": "Pain Points",
            "items": notes
          }
      }
      console.log(columnsFromBackend);
    //   const [columns, setColumns] = useState(columnsFromBackend);

    // console.log(notes);
    const onDragEnd = (result) => {
        const { destination, source, draggableid } = result;
        if(!destination){
            return;
        }
        // const column = columns[source.droppableid];
        // const copiedItems = [...column.items];
        // const [removed] = copiedItems.splice(source.index, 1);
        // copiedItems.splice(destination.index);
    }
    return ( 
        <DragDropContext onDragEnd={onDragEnd}>
        <div>
            <Navbar2></Navbar2>
            <div>
                {err && <div>{err}</div>}
                {buckets && <BucketList buckets={buckets} title="All buckets"></BucketList>}
            </div>
        </div>
        </DragDropContext>
     );
}
 
export default Groups;