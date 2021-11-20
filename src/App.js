import { useState, useEffect } from "react";
import "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { saveToLS, getFromLS } from "./components/helpers/helpers";
import s from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const parsedContactsFromLs = getFromLS("contactsData");

  useEffect(() => {
    if (parsedContactsFromLs) {
      setContacts(parsedContactsFromLs);
    }
  }, []);
  // чтобы  только на первом ренедере  работало массив зависимостей ост  пустым

  useEffect(() => {
    saveToLS("contactsData", contacts);
  }, [contacts]);
  // обновление при изменении  контактов

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const nameInContact = contact.name.toLowerCase().trim();
    const isInContact = contacts.find(
      (cont) => cont.name.toLowerCase().trim() === nameInContact
    );
    if (isInContact) {
      alert(`${contact.name} is already in contact`);
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toString().toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterHandler} />
      <ContactList
        contacts={getVisibleContact()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
