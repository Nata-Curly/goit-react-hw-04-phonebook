import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm, Label, Btn, Input } from './Form.styled';

const Form = ({onSubmitProp}) =>  {
  const [name, stateName] = useState('');
  const [number, stateNumber] = useState('');

  // const handleNameAdd = evt => {
  //   stateName(evt.target.value);
  // };
 
  // const handleNunberAdd = evt => {
  //   stateNumber(evt.target.value);
  // };
  
  const handlAdd = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name': stateName(value); break;
      case 'number': stateNumber(value); break;
      default: throw new Error('Unknown state');
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmitProp(name, number);
    reset();
  };
     
 const reset = () => {
   stateName('');
   stateNumber('');
 
  };
    
  const contactId = nanoid();
  
      return (
        <AddContactForm onSubmit={handleSubmit}>
          <Label htmlFor={contactId}>
            Name <br />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces"
              placeholder="enter contact's name"
              fullWidth
              aria-describedby="contact's name"
              required value={name} onChange={handlAdd} id={contactId}
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
              required value={number} onChange={handlAdd}
            />
          </Label>
          <Btn type='submit'>Add contact</Btn>
        </AddContactForm>
      );
  };
 
export default Form;

// class Form extends Component {

//   state = {
//     name: '',
//     number: ''
//   };
  
//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmitProp(this.state);
//     this.reset();
//   };
    
//   handleAdd = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };
    
//   reset = () => {
//     this.setState({
//       name: '',
//       number: ''
//     });
//   };
    
//   contactId = nanoid();
//     render() { 
//       return (
//         <AddContactForm onSubmit={this.handleSubmit}>
//           <Label htmlFor={this.contactId}>
//             Name <br />
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces"
//               placeholder="enter contact's name"
//               fullWidth
//               aria-describedby="contact's name"
//               required value={this.state.name} onChange={this.handleAdd} id={this.contactId}
//             />
//           </Label>
//           <Label htmlFor="">
//             Number <br />
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//               title="Phone number can contain only numbers, spaces, dashes, parentheses and can start with +"
//               placeholder="enter contact's phone number"
//               fullWidth
//               aria-describedby="phone number"
//               required value={this.state.number} onChange={this.handleAdd}
//             />
//           </Label>
//           <Btn type='submit'>Add contact</Btn>
//         </AddContactForm>
//       );
//   };
// }
 
// export default Form;