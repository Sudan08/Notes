import React from "react";

function Header(){
    var time = new Date();
    var mode = time.getHours();
    
    

    mode > 12 ?mode = (mode - 12) + " pm":mode = mode + "am";

    return <header>

            <h2 className="note">Note-ME</h2>
            <h2 className="Time">Time : {mode}</h2>

            </header>



}

export default Header


