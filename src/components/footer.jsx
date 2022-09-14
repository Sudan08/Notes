import React from "react";


function Footer(){

    var date = new Date();
    var year = date.getFullYear();
    return <footer>
     <p className="copyright">Copyright {year}</p>
     </footer>
}

export default Footer;