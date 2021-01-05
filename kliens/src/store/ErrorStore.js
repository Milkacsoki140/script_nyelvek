import {EventEmitter} from 'events'
import dispatcher from "../dispatcher/Dispatcher";
import {clearError, showError} from '../dispatcher/ActionConstans';

class ErrorMessageStore extends EventEmitter{

    _errorMsg = "";

    emitChange(){
        this.emit('Change');
    }

    addOnChangeListener(callback){
        this.addListener('Change', callback);
    }

    removeOnChangeListener(callback){
        this.removeListener('Change',callback);
    }
}
const store = new ErrorMessageStore();
export default store;

dispatcher.register(({action,payload})=>{
    console.log({action : action, payload : payload});
    if(action !== showError){
        return;
    }
    store._errorMsg = payload;
    store.emitChange();
});

dispatcher.register(({action})=>{
    if(action !== clearError) return;
    store._errorMsg = "";
    store.emitChange();
});