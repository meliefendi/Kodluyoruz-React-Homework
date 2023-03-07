import React, { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" }

function Form({ setContacts, contacts }) {

    //const [form, setForm] = useState({fullname:"", phone_number:""}); bunun yerine alttakini yazdık. alttakini yazmak için yukarda değişken oluşturduk.
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onSubmit = (e) => {  //form gönderildiğinde yapılan işlemler
        e.preventDefault()

        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }

        setContacts([...contacts, form]); //forma girilen bilgileri "list" sayfasına aktarma aracı


        // setForm({fullname:"", phone_number:""}) bunun yerine alttakini yazdık.
        //setForm(initialFormValues);

    };

    return (
        <form onSubmit={onSubmit}>
           
            <div>
                <input
                    name="fullname"
                    placeholder="Full Name"
                    onChange={onChangeInput}
                    value={form.fullname}
                />
            </div>

            <div>
                <input
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={onChangeInput}
                    value={form.phone_number}
                />
            </div>
            <div className="btn">
                <button>Add</button>
            </div>
        </form>
    );
}

export default Form;