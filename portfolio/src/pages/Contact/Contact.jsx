import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
        <form>
            <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit">Enviar mensaje</button>
        </form>
        </div>
    );
};

export default Contact;
