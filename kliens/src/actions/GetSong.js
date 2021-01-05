import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const GetSong = () => {
    axios.defaults.timeout = 1500;
    axios.get('/allsong').then((resp) => {
        console.log(resp.data);
        dispatcher.dispatch({
            action: actionConstants.refresh,
            payload: resp.data

        }

    )
    })
}