import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import initialContacts from '../data/contacts.json';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { showInfoMessage, showErrorMessage } from './Notification';

const getInitialContacts = () => { 
  const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);
    if (storageContacts) 
  { return parsedContacts; }
  return initialContacts;
}

const App = () => {

  const [contacts, setContacts] = useState(getInitialContacts);

  const [filter, setFilter] = useState('');

   // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) 
  //     setContacts(parsedContacts);
    
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


 const formSubmitHandler = (name, number) => {
  
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const repeatName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );
    !repeatName ? setContacts( prevContacts  => 
       [contact, ...prevContacts]
    ) : showInfoMessage(
      `The contact with name "${name}" is already in your phonebook`
    );
  };

  const changeFilter = (evt) => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const deleteContact = (contactId, name) => {
    setContacts(prevContact => {
     return prevContact.filter(contact => contact.id !== contactId)
    });
    showErrorMessage(`You have deleted a contact "${name}"`);
  };

   const visibleContacts = getVisibleContacts();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmitProp={formSubmitHandler} />
        <ToastContainer />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />        
        <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
        <div>
        </div>
    </div>  
    );
  }
 
  
 export default App;

//  class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: '',
//   }

//   formSubmitHandler = data => {
//     console.log(data);
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };
//     const repeatName = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase().trim()
//     );
//     !repeatName ? this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts]
//     })) : showInfoMessage(
//       `The contact with name "${data.name}" is already in your phonebook`
//     );
//   };

//   changeFilter = (evt) => {
//     this.setState({ filter: evt.target.value })
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }

//   deleteContact = (contactId, name) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }));
//     showErrorMessage(`You have deleted a contact "${name}"`);
//   };

//   componentDidMount() {
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts);
    // if (parsedContacts) {
    //   this.setState({ contacts: parsedContacts });
//     };
    
//   };
//   componentDidUpdate(PrevProps, PrevState)
//   {
//     // console.log('App componentDidUpdate');
//     // console.log(PrevState);
//     // console.log(this.state);
//     if (this.state.contacts !== PrevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   };

//   render() {
//     // console.log('App render');

//     const { filter } = this.state;
    
//     const visibleContacts = this.getVisibleContacts();
    
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <Form onSubmitProp={this.formSubmitHandler} />
//         <ToastContainer />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />        
//         <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
//         <div>
//         </div>
//     </div>  
//     );
//   }
//  }
  
//  export default App;
