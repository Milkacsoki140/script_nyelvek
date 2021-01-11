import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {GetSong} from "./GetSong";

export const AddNewSong = (value) => {
    axios.defaults.timeout = 1500;
    axios.post('/add',
        {
            title: value.title,
            performer:value.performer,
            release:value.release,
            genre:value.genre
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