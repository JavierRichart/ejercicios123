import React from 'react';
import { Contacto } from '../../models/contact.class';
import { ESTADOS } from '../../models/estado.enum';
import ContactoComponent from '../componente_a/contacto';

const ContactListComponent = () => {

    const defaultContact = new Contacto('Javier', 'Lopez', 'javier@mail.com', ESTADOS.ENLINEA)

    return (
        <div>
            <div>
                <h1>
                    Contacto:
                </h1>   
            </div>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
        </div>
    );
}

export default ContactListComponent;
