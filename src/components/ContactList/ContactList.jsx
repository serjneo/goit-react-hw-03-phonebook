import s from './ContactList.module.css'

function ContactList({ contacts, onRemove }) {
    return (
        <ul className={s.list}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p className={s.title}>Name: { contact.name }</p>
                    <p className={s.title}>Number: {contact.number}</p>
                    <button className={s.button} onClick={()=> onRemove(contact.id)} type="button">Delete</button>
                </li>   
            ))}
        </ul>
    )
};

export default ContactList;