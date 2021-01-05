import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainView} from "./components/Main";

function App() {
    return (
        <div>
                <div>
                    <nav className="navbar navbar-light bg-light justify-content-between ">
                        <a className="navbar-brand">Zeneszámok</a>
                    </nav>
                    <div className={"pb-5"}/>
                </div>
            <MainView></MainView>
        </div>
    );
}

export default App;
