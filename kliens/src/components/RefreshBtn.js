import React , { Component } from 'react'
import {Button} from "reactstrap";
import {GetSong} from "../actions/GetSong";

class RefreshBtn extends React.Component {
    handleClick = () => {
        GetSong();
    }

    render() {
        return ( <div className={"text-right"}><Button onClick={() => this.handleClick()} className={"btn btn-warning"}>Zenék ujratöltése</Button></div>);
    }
}

export default RefreshBtn