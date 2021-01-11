import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {GetSong} from "./GetSong";

export const DeleteSong = (value) => {
    axios.defaults.timeout = 1500;
    axios.delete('/delete',{},
        {

        })
        .then((resp) => {
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