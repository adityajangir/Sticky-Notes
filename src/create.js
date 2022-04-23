import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [domain , setDomain] = useState('Risks');
    const [description , setDescription] = useState('Erase and add a new description');
    const [user , setUser] = useState('ABC');
    const [grp , setGrp] = useState('Goals/Needs');
    const Navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const note = { domain, user, description, grp };
        console.log(note);

        fetch('http://localhost:8000/notes', {
            method: 'Post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            console.log("New Blog Added");
            Navigate('/');
        })

        
    }


    return ( 
        <div className="create p-5 m-5 rounded-md bg-slate-200 inline-block place-items-center">
            <h1 className="text-3xl font-bold pb-2">Create a new note</h1>
            <form action="" onSubmit={handlesubmit}>
                <select name="" id="" className="mb-2 rounded-sm" value={domain} onChange = {(e) => setDomain(e.target.value)}>
                    <option>Services</option>
                    <option>Risks</option>
                </select><br />
                <label htmlFor="" className="mb-2 mr-2">User</label>
                <input type="text" className="mb-2 rounded-sm" value={user} onChange={(e)=> setUser(e.target.value)}/><br />
                <label htmlFor="" className="mb-2 mr-2">Description</label>
                <textarea name="" id="" cols="50" rows="10" className=" rounded-sm" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                <select name="" id="" className="mb-2 rounded-sm" value={grp} onChange = {(e) => setGrp(e.target.value)}>
                    <option>Pain Points</option>
                    <option>Goals/Needs</option>
                </select>
                <button className="bg-black text-white m-2 p-2 rounded md">Add Note</button>
            </form>
        </div>
     );
}
 
export default Create;