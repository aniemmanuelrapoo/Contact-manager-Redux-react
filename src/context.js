import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state = {
        contacts: [
            {
                id: 1,
                name: 'Emmanuel Rapoo',
                email: 'Emmanuelrapoo@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Light Bro',
                email: 'Lightbro@gmail.com',
                phone: '333-333-3333'
            },
            {
                id: 3,
                name: 'Favour Diva',
                email: 'Favourdiva@gmail.com',
                phone: '777-777-7777'
            }
        ]
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
