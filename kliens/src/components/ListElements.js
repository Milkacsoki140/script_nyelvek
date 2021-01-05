import React from 'react'
import ListElement from "./ListElement";
import store from "../store/SongStore";
import {GetSong} from "../actions/GetSong";

class ListElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: ""
        }
        this._updateState = this._updateState.bind(this);
        this.componentDidMount = this.componentDidMount(this);
    }

    componentDidMount() {
        store.addChangeListener(this._updateState);
        GetSong();
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
        GetSong();
    }

    _updateState() {
        this.setState({song: store._songs});
        console.log(this.state.song)
        console.log(Object.keys(this.state.song).map(function(_) { return this.state.song[_]; }));

    }

    render() {
        return (
            <div>
                {/*this.state.song.map(({id, title, performer, release, genre}, index) => {
                    return (
                        <ListElement key={id} id={id} title={title} performer={performer} release={release} genre={genre}/>
                    );
                })*/}
            </div>
        )
    }
}

export default ListElements