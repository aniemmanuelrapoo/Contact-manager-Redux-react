import { GET_CONTACTS } from './types';

export const getContacts = () => {
    return{
        type: GET_CONTACTS
    }
}

const MapDispatchToProps = (dispatch) => ({
    getContacts: () => dispatch({type: GET_CONTACTS})
})