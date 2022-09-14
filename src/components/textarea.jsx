import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function Textarea(props){
    const [expand,setexpand] = useState(false)
    const [note ,setnote] = useState({
        title:"",
        content:""
});

function type(event){
    const {name ,value}= event.target; 

    setnote(prev =>{
        return{
            ...prev,
            [name] : value
        };
    });
}

function add(event){
    props.onadd(note);
    event.preventDefault();
    setnote(()=>{
        return {
            title:"",
            content:""
        }
    }
    )
}
function expands(){
    setexpand(true);
}


    return <div>
        <form>
        {expand?
        <input type="text" name="title" placeholder="Enter the Title" value={note.title} onChange={type}/>:null}
        <textarea onClick={expands} name="content" placeholder="Enter note" rows={expand?3:1} value={note.content} onChange={type}/>
        {expand?<button onClick={add}><AddIcon/></button>:null}
        </form>
    </div>
}

export default Textarea;   