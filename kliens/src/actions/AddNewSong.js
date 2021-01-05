import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {GetSong} from "./GetSong";

export const AddNewSong = (value) => {
    axios.defaults.timeout = 1500;
    axios.post('/employee/add',
        {
            name: value.name,
            address: value.address,
            dateOfBirth: value.dateOfBirth
        })
        .then((resp) => {
            console.log("response")
            console.log(resp)
            GetSong();
        })
        .catch((error) => {
                console.log(error);
                dispatcher.dispatch(
                    {
                        action: actionConstants.showError,
                        payload: null
                    }
                )
            }
        )
}