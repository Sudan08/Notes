import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function del(){
        props.onDelete(props.id);
    }

    return <div className="Container">
        <h1 className="Title">{props.title}</h1>
        <h3 className="desc">{props.desc}</h3>
   
        <button onClick={del}><DeleteIcon /></button>
     
    </div>
}
 
export default Note