import { useState } from "react";
import { v4 } from "uuid";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

function Contact() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:""
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({...contact , [name] : value}))
    };


    const addHandler = () => {
        if(
            !contact.name
            || !contact.lastName
            || !contact.email
            || !contact.phone){
            setAlert ("Please enter valid data!")
            return;
        }
        setAlert("");
        const newContact = { ...contact , id : v4()};
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            id: "",
            name:"",
            lastName:"",
            email:"",
            phone:"",
        })
    };


  return (
    <>
    <div>
        {
            inputs.map(input => (
            <input
            key={input.index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
            autoComplete="off"
            />))
        }
        {/*up is shortcut of down */}
        {/* <input
        type="text"
        placeholder="Name"
        name="name"
        value={contact.name}
        onChange={changeHandler}
        autoComplete="off" />

        <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={contact.lastName}
        onChange={changeHandler}
        autoComplete="off" />

        <input
        type="email"
        placeholder="Email"
        name="email"
        value={contact.email}
        onChange={changeHandler}
        autoComplete="off" />

        <input
        type="number"
        placeholder="Phone Number"
        name="phone"
        value={contact.phone}
        onChange={changeHandler}
        autoComplete="off" /> */}

        <button onClick={addHandler}>Add contact</button>
    </div>
        <div>{alert && <p>{alert}</p>}</div>
        <ContactsList contacts={contacts} />
    </>
  )
}

export default Contact
