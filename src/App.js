import React from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import contactFilter from './utils/filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: contacts ?? initialState });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubmitForm = contact => {
    this.state.contacts.some(({ name }) => name === contact.name)
      ? alert('Contact already exists')
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: shortid.generate(), ...contact },
          ],
        }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChangeFilter = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <ContactForm onSubmit={this.handleSubmitForm} />
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          onRemove={this.removeContact}
          contacts={contactFilter(this.state.contacts, this.state.filter)}
        />
      </div>
    );
  }
}

export default App;
