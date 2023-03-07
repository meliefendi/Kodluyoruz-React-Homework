import { useState, useEffect } from "react";

import "./style.css"
import List from "./List";
import Form from "./Form";

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname:"Melih",
            phone_number:"123456",
        },{
            fullname:"Mehmet",
            phone_number:"78910",
        },{
            fullname:"Nazlı",
            phone_number:"98765",
        },
    ]);

    useEffect(() => {  
        console.log(contacts) //girilen bilgilerin son hali 
    }, [contacts])

    return (
        <div id="container">
  <h1>Contacts</h1>
            <List contacts={contacts} />

            <Form setContacts={setContacts} contacts={contacts}></Form> 

        </div>
    )
}

export default Contacts;