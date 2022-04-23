// eslint-disable;
import { Link } from "react-router-dom"
import { useState } from "react"
<script src="https://cdn.tailwindcss.com"></script>

const Navbar2 = () => {

    const [filter, setFilter] = useState('All');
    const droponchange = (e) => {
        setFilter((e.target.value));
        return e.target.value;
    }
 
    return ( 
        <div className="">
            <div className="navbar bg-slate-50 p-5 flex justify-between">
                <div className= "font-medium ml-6">Filter by:
                    <form action="" className="inline-block">
                        <select name="" id="" value={filter} onChange={(e) => droponchange(e, filter, setFilter)} className="ml-2 bg-black text-white p-2 rounded-md font-normal mr-2">
                            {/* <option>All</option> */}
                            <option>Services</option>
                            <option>Risks</option>
                            {/* <option>NaN</option> */}
                        </select>
                    </form>
                    {/* <button className="ml-2 bg-black text-white p-2 rounded-md font-normal mr-2">
                        Select
                    </button> */}
                </div> 
                <div className="mr-2">
                    <button className="ml-2 bg-black text-white p-2 rounded-md font-normal mr-2">
                        <Link to="/">Home</Link>                         
                    </button>
                    <button className="mr-10 bg-black text-white p-2 rounded-md font-normal">
                        <Link to="/create">
                            <i class="bi bi-file-earmark-plus-fill"></i>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
     );
    
}

export default Navbar2;