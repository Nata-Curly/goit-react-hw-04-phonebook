import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';


const ContactList = ({contacts, onDeleteContact}) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <li key={id}> 
                <ContactItem name={name} number={number} onDelete={() => onDeleteContact(id, name)} />
            </li>
        ))}
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
export default ContactList;