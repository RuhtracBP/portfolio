import React from 'react'

function Contact() {
    return (
            
        <div className="card contact-card">
            <h2 className="contact-title">Contact me</h2>
            <form className="contact-form" action="">
                <input className="contact-name" placeholder="Name" type="text"/>
                <input className="contact-email" placeholder="Email" type="email"/>
                <textarea className="contct-message" placeholder="Message" type="text"/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact
