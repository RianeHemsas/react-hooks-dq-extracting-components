import React from "react";
import { messages, contacts } from "../data";
import ContactList from "./ContactList";
import Main from "./Main";


console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts}/>

        <Main messages={messages}/>

      {/* <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          <li className="contact">
            <div className="icon">A</div>
            Angela
          </li>
          <li className="contact active">
            <div className="icon">P</div>
            Pamela
          </li>
          <li className="contact">
            <div className="icon">S</div>
            Sandra
          </li>
          <li className="contact">
            <div className="icon">R</div>
            Rita
          </li>
        </ul>
      </nav> */}
    
        {/* <h2>Messages</h2>
        <section className="messages">
          <ul>
            <li className="message sent">
              <div className="icon">E</div>
              <span className="content">One</span>
            </li>
            <li className="message received">
              <div className="icon">P</div>
              <span className="content">Two</span>
            </li>
            <li className="message sent">
              <div className="icon">E</div>
              <span className="content">Three four five</span>
            </li>
            <li className="message received">
              <div className="icon">P</div>
              <span className="content">🎺🎺🎺🎺🎺</span>
            </li>
          </ul>
        </section> */}
      
     
    </div>
  );
}

export default App;
