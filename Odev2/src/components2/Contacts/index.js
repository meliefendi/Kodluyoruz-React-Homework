
import React, { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function Contacts(){
const [contacts, setContacts] = useState([])
const [situation, setSituation] = useState("All")



    return(
<>
<Header contacts={contacts} setContacts={setContacts}/>
<List contacts={contacts} setContacts={setContacts} situation={situation}setSituation={setSituation}></List>
<Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}></Footer>
</>
    )
}

export default Contacts;