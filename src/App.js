import Navbar from './navbar';
import Notes from './notes';
// import Navbar2 from './nav2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Create from './create.js'
import Notedetails from './notedetails'
import Groups from './group';
import { dragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
  return (
    <Router>
      <div className="App h-full">
        <Navbar></Navbar>
        {/* <Dev/> */}
        {/* <Navbar2></Navbar2> */}
        <Routes>
          <Route exact path='/notes' element={<Notes/>}/>
          <Route exact path='/create' element={<Create/>}/>
          <Route exact path='/note/:id' element={<Notedetails/>}/>
          <Route exact path='/groups' element={<Groups/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
