import { Link } from "react-router-dom";
<script src="https://cdn.tailwindcss.com"></script>


const Navbar = () => {

    return ( 
        <div className="">
            <div className="navbar bg-slate-50 p-5 flex justify-between">
                <div className= "font-medium text-2xl">Messaging / 
                    <button className="font-medium text-1xl text-slate-600">Affinity Map<i class="bi bi-caret-down-fill"></i></button>
                </div> 
                <div className="mr-2">
                    <button className="bg-black text-white p-2 rounded-md font-normal mr-2">
                        <Link to='/groups'>Group Highlights</Link>
                    </button>
                    <button className="bg-black text-white p-2 rounded-md font-normal">
                        Dot Voting
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;