// import { useState, useEffect } from 'react'
import Notelist from './notelist';
import useFetch from './useFetch';
import Navbar2 from './nav2';
import {useState, useEffect} from 'react'
// import {droponchange} from './nav2';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';


const Notes = () => {

    // console.log(filter);
    const {data: notes, error} = useFetch('http://localhost:8000/notes')

    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list);
    //     const [removed] = result.splice(startIndex, 1);
    //     result.splice(endIndex, 0, removed);
      
    //     return result;
    //   };
    //   const [items, setItems] = useState([]);

    //   useEffect(() => {
    //     setItems(notes);
    //   }, []);
    
    //   const onDragEnd = (result) => {
    //     if (!result.destination) {
    //       return;
    //     }
    
    //     const reorderedItems = reorder(
    //       items,
    //       result.source.index,
    //       result.destination.index
    //     );
    
    //     console.log({ reorderedItems });
    //     setItems(reorderedItems);
    //   };

    // ondragover = (ev) => {
    //     ev.preventDefault();
    // } 
      const id = uuid();
    return ( 
        <div>
            <Navbar2></Navbar2>
            
            <DragDropContext onDragEnd={ondragend}>
                
                {/* {error && <div>{error}</div>} */}
            <div id='droppable'>
                {/* <Droppable ondragover={(e)=> this.ondragover(e)}> */}
                <Droppable droppableId={String(id)}>
                            {provided => (
                                <div {...provided.droppableProps} ref={provided.innerRef} key={id} className='' style={{height: "50vh"}}>
                                    {notes && <Notelist notes={notes} title="All notes"></Notelist>}
                                    { provided.placeholder }
                                </div>
                       )}   
                </Droppable>
            </div>
            </DragDropContext>
        </div>
     );
}
 
export default Notes;