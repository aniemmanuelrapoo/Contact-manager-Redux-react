import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Emma Rapoo',
                email: 'rapoo@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Light Bro',
                email: 'light@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 3,
                name: 'Favour sis',
                email: 'favpur@gmail.com',
                phone: '555-555-5555'
            }
        ]
    }
    render() {
        const { contacts } = this.state
        return(
            <>
            <h1 className="display-4 mb-2"><span className='text-danger'>Contact</span> List</h1>
                {
                    contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                    ))
                }
            </>
        )
    }
}

export default Contacts;
