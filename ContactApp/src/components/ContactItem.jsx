
import PropTypes from "prop-types"
function ContactItem({data: {id, name , lastName, email, phone},
    deleteHandler
    }) {
  return (
    <div>
        <li key={id}>
                    <p>{name} {lastName}</p>
                    <p><span>📧</span>{email}</p>
                    <p><span>📞</span>{phone}</p>
                    <button onClick={() => deleteHandler(id)}>🗑</button>
                </li>
    </div>
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
