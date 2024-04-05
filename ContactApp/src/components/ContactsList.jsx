import PropTypes from 'prop-types'

import ContactItem from "./ContactItem"

function ContactsList({ contacts, deleteHandler}) {
  return (
    <div>
        <h3>Contacts List</h3>
        {contacts.length ?(
            <ul>
            {contacts.map((contact) => (
                <ContactItem    key={contact.id}
                                data={contact}
                                deleteHandler={deleteHandler}/>
            ))}
        </ul>
        )
        : <p>No contacts yet</p>}

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
