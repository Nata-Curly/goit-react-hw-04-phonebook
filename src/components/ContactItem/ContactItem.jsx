import { DeleteBtn, ListItem } from "./ContactItem.styled";
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDelete }) =>
(<ListItem>
    <p>{name}: {number}</p>
    <DeleteBtn type="button" onClick={onDelete}>Delete</DeleteBtn>
</ListItem>);

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactItem;