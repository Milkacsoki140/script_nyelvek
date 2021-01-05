import React from 'react'
import ModifyElement from "./ModifyElement";
import DeleteElement from "./DeleteElement";

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                id: this.props.id,
                title: this.props.title,
                performer: this.props.performer,
                release: this.props.release,
                genre: this.props.genre

            }
        }
    }

    render() {
        return (
            <div className={"col pb-5"}>
                <div className={"card text-center"}>
                    <div className={"card-header"}>
                        Azonositó #ID: {this.state.element.id}
                    </div>
                    <div className={"card-body"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h5 className={"card-title"}>{this.state.element.title}</h5>
                                </div>
                                <div className="col-sm">
                                    <p className={"card-text"}>{this.state.element.performer}</p>
                                </div>
                                <div className="col-sm">
                                    <DeleteElement deleteID={this.state.element.id} title={this.state.element.title}/>
                                </div>
                                <div className="col-sm">
                                    <ModifyElement title={this.state.element.title} performer={this.state.element.performer}
                                                   release={this.state.element.release} genre={this.state.element.genre}
                                                   modifyID={this.state.element.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card-footer text-muted"}>
                        Megjelenés dátuma: {this.state.element.release}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListElement