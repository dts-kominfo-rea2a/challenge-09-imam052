// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';
const Contact = ({data}) => {
    const {name, phone, email, photo: avatar} = data;
    return (
        <>
            <div className="contact">
                <div className="contact-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="contact-info">
                    <h2>{name}</h2>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
        </>
    )
}

export default Contact;