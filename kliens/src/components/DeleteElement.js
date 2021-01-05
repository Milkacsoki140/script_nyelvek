import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DeleteSong} from "../actions/DeleteSong";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class DeleteElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {
                deleteID: props.deleteID,
                title: props.title
            },
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    handleClick = (input) => {
        console.log('The link was clicked.');
        DeleteSong(input)
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-danger"}>Zene törlése</Button>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    contentLabel="zene törlése"
                    style={customStyles}
                >
                    <div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Ennek a zenének a törlése: {this.state.song.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">#ID:{this.state.song.deleteID}</h6>
                            <p className="card-text">Ezt a zenét véglek kitörli!</p>
                            <button onClick={() => this.handleClick(this.state.song.deleteID)} className={"btn btn-danger card-link"}>Törlés
                            </button>
                            <button onClick={this.handleCloseModal} className={"btn btn-primary card-link"}>Visszavonás
                            </button>
                        </div>
                        <p>{this.state.deleteID}</p>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default DeleteElement