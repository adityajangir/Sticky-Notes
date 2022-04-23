import useFetch from "./useFetch";
import Notelist from "./notelist";


const Groups = () => {

    const {notes, error} =  useFetch('http://localhost:8000/notes');
    console.log(notes);
    return ( 
        <div className="groups flex flex-wrap place-content-center">
            <div className="bg-slate-200 basis-[55%] p-5 m-5 rounded-md mt-20">
                <h1 className="text-2xl font-bold mb-2">Goals/Needs</h1>
                {error && <div>{error}</div>}
                {notes && <Notelist notes={notes.filter((note) =>note.grp == 'Goals/Needs')} title="All notes"></Notelist>}
            </div>
            <div className="bg-slate-200 basis-[35%] p-5 m-5 rounded-md">
                <h1 className="text-2xl font-bold mb-2">Pain Points</h1>
                {error && <div>{error}</div>}
                {notes && <Notelist notes={notes.filter((note) =>note.grp == 'Pain Points')} title="All notes"></Notelist>}
            </div>
        </div>
     );
}
 
export default Groups;