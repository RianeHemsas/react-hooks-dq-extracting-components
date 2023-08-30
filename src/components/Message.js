import React from "react";


function Message({id,type,name,content}){

  
    return (
       
       
        <li key={id} className={`message ${type}`}>
      <div className="icon">{name[0]}</div>
      <span className="content">{content}</span>
    </li>
    
    );

   
    

}
export default Message;