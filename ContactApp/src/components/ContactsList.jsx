import PropTypes from 'prop-types'

import ContactItem from "./ContactItem"

import styles from "./contactList.module.css"

function ContactsList({ contacts, deleteHandler}) {
  return (
    <div className={styles.container}>
        <h3>Contacts List</h3>
        {contacts.length ?(
            <ul className={styles.contacts}>
            {contacts.map((contact) => (
                <ContactItem    key={contact.id}
                                data={contact}
                                deleteHandler={deleteHandler}/>
            ))}
        </ul>
        )
        : <p className={styles.message}>No contacts yet</p>}

    </div>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.shape({
    length: PropTypes.any,
    map: PropTypes.func
  }),
  deleteHandler: PropTypes.any
}

ContactsList.PropTypes = {
    contacts: PropTypes.array.isRequired
};
export default ContactsList
