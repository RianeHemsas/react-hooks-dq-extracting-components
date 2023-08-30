
function ContactList({contacts}){

    // const { contacts } = props;

    return (
        <nav>
          <h2>Contacts</h2>
          <ul className="contacts">
            {contacts.map((contact) => (
              <li  key={contact.id} className="contact " >
                <div className="icon">{contact.name[0]}</div>
                {contact.name}
              </li>
            ))}
          </ul>
        </nav>
      );
        }



export default ContactList;