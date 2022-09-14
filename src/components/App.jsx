import React, { useState } from "react";
import Header from "./header.jsx";
import Footer from  "./footer.jsx";
import Note from "./notes.jsx";
import Textarea from "./textarea.jsx";




function App(){
    const [notes,setnotes] = useState([]);


    function adding(note){
        setnotes(prev => {
            return [...prev,note];
        })     
    }

    function deleting(id){
        setnotes(pre =>{
            return pre.filter((items ,index) => {
                return index !== id ;
            })
        })
    }


    return <div>
        {console.log(React.version)}
    <Header />
    <Textarea onadd={adding} />
    {notes.map( (not ,index) => {
        return <Note 
        key = {index}
        id = {index}
        onDelete ={deleting}
        title={not.title}
        desc={not.content} />
    })}
    <Footer />        
    </div>

}

export default App;
