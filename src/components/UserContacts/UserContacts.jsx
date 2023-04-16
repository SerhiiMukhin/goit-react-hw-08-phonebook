import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import css from './UserContacts.module.css'

export const UserContacts = () =>
{
    return (
        <div className={css.wrapper}>
        <h1 className={css.main_title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.contacts_title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
}