import PropTypes from "prop-types"

import styles from './contactItem.module.css'

function ContactItem({data: {id, name , lastName, email, phone},
    deleteHandler
    }) {
  return (
        <li className={styles.item}>
                    <p>{name} {lastName}</p>
                    <p><span>📧</span>{email}</p>
                    <p><span>📞</span>{phone}</p>
                    <button onClick={() => deleteHandler(id)}>🗑</button>
                </li>
  )
}

ContactItem.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.any,
    id: PropTypes.any,
    lastName: PropTypes.any,
    name: PropTypes.any,
    phone: PropTypes.any
  }),
  deleteHandler: PropTypes.any
}

export default ContactItem
