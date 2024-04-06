import { useState } from "react";
import { v4 } from "uuid";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

import styles from "./contact.module.css"

function Contact() {
    const [contacts, setContacts] = useState([{
        id:"0",
        name:"Roozbeh",
        lastName:"Rigi Jangjo",
        email:"SilentRoozbeh@gmail.com",
        phone:"09024995222"}]);{/*We consider an empty array for the list of contacts, but I put my information as default.*/}
    const [alert, setAlert] = useState("");{/*We consider an empty string for warning */}
    {/*We consider an empty object for inputs, whose ID value is determined using a unique ID*/}
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
            !contact.name ||
            !contact.lastName ||
            !contact.email ||
            !contact.phone
            ){
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

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts)
    }

    return (
    <div className={styles.container}>
        <div className={styles.form}>
        {/*inputs part : */}
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
        <button onClick={addHandler}>Add contact</button>
        </div>
    {/*Alert part : */}
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
    {/*contacts list part: */}
        <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  )
}

  export default Contact
