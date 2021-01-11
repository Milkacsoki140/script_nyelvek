import {EventEmitter} from 'events'
import dispatcher from "../dispatcher/Dispatcher";
import {refresh} from '../dispatcher/ActionConstans';

class SongStore extends EventEmitter {
    _songs = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }
}

const store = new SongStore();
export default store;

dispatcher.register(({action,payload})=>{
    if(action !== refresh ) return;
    store._songs = payload;
    store.emitChange();
    console.log(store._songs)
})