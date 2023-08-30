import React from "react";



import Message from "./Message";

function Main({messages}){


    return(
        <main>
       <h2>Messages</h2>
       <section className="messages">
         <ul>
           {messages.map((message) => (
             <Message key={message.id} type={message.type} name={message.name} content={message.content} />
           ))}
         </ul>
       </section>
   
<form className="message-form">
<input placeholder="Type a message..." />
 </form>

     </main>
    );
  
       
}

export default Main;

