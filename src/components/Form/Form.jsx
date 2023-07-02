import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm, Label, Btn, Input } from './Form.styled';

class Form extends Component {

  state = {
    name: '',
    number: ''
  };
  
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmitProp(this.state);
    this.reset();
  };
    
  handleAdd = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
    
  reset = () => {
    this.setState({
      name: '',
      number: ''
    });
  };
    
  contactId = nanoid();
    render() { 
      return (
        <AddContactForm onSubmit={this.handleSubmit}>
          <Label htmlFor={this.contactId}>
            Name <br />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces"
              placeholder="enter contact's name"
              fullWidth
              aria-describedby="contact's name"
              required value={this.state.name} onChange={this.handleAdd} id={this.contactId}
            />
          </Label>
          <Label htmlFor="">
            Number <br />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number can contain only numbers, spaces, dashes, parentheses and can start with +"
              placeholder="enter contact's phone number"
              fullWidth
              aria-describedby="phone number"
              required value={this.state.number} onChange={this.handleAdd}
            />
          </Label>
          <Btn type='submit'>Add contact</Btn>
        </AddContactForm>
      );
  };
}
 
export default Form;