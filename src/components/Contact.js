import React, {useState} from 'react';
import { db } from './Firebase';



function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (!name.replace(/\s/g, '').length) {
            alert('Name Invalid');
            return;
        }
        if (!email.replace(/\s/g, '').length) {
            alert('Email Invalid');
            return;
        }
        if (!message.replace(/\s/g, '').length) {
            alert('Message Invalid');
            return;
        }
        //console.log(name);


        db.collection('contacts').add({
            name:name,
            email:email,
            message:message
        })
        .then(() =>{
            alert('Message has been sent')
        })
        .catch(err =>{
            alert(err.message);
        });

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
            
        <div className="card contact-card" id="Contact">
            <h2 className="contact-title">Contact me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                    className="contact-name" 
                    placeholder="Name" 
                    type="text" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input 
                    className="contact-email" 
                    placeholder="Email" 
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <textarea 
                    className="contact-message" 
                    placeholder="Message" 
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <button  className="contact-submit" >Send</button>
            </form>
        </div>
    )
}

export default Contact
