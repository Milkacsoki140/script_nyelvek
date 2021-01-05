import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";
import * as Yup from "yup";
import {Formik} from "formik";
import {ModifySong} from "../actions/ModifySong";

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

class ModifyElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            song: {
                title: this.props.title,
                performer: this.props.performer,
                release: this.props.release,
                genre: this.props.genre,
                modifyID: this.props.modifyID
            }
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-success"}>Zernék modosítása</Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    ariaHideApp={false}
                    contentLabel="Add employee"
                    style={customStyles}
                >
                    <div className="card-body text-center">
                        <h5 className="card-title">modositsd a zenék adatait</h5>
                        <h6 className="card-subtitle mb-2 text-muted">#ID:{this.state.song.modifyID}</h6>
                        <Formik
                            initialValues={{
                                title: this.state.song.title, performer: this.state.song.performer,
                                release: this.state.song.release, modifyID: this.state.song.modifyID,
                                genre: this.state.song.genre
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    ModifySong(values);
                                    this.setState({showModal : false})
                                    setSubmitting(false);
                                }, 500);
                            }}

                            validationSchema={Yup.object().shape({
                                title: Yup.string()
                                    .required(),
                                performer: Yup.string()
                                    .required(),
                                release: Yup.date()
                                    .required(),
                                genre: Yup.date()
                                    .required()
                            })}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="title">Cím:</label>
                                            <input
                                                name="title"
                                                type="text"
                                                placeholder="Zene címe"
                                                value={values.title}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={ errors.title && touched.title ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.title && touched.title && (
                                                <div className={"invalid-feedback"}>{errors.title} </div>
                                            )}
                                        </div>
                                        <div className={"form-group"}>
                                            <label htmlFor="performer">Előadó:</label>
                                            <input
                                                name="performer"
                                                type="text"
                                                placeholder="Előadó neve"
                                                value={values.performer}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.performer && touched.performer ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.performer && touched.performer && (
                                                <div className={"invalid-feedback"}>{errors.performer}</div>
                                            )}
                                        </div>
                                        <div className={"form-group"}>
                                            <label htmlFor="release">Megjelenése :</label>
                                            <input
                                                name="release"
                                                type="date"
                                                placeholder="Megjelenés időpontja!"
                                                value={values.release}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.release && touched.release ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.release && touched.release && (
                                                <div className={"invalid-feedback"}>{errors.release}</div>
                                            )}
                                        </div>
                                        <div className={"form-group"}>
                                            <label htmlFor="genre">Kategória :</label>
                                            <input
                                                name="genre"
                                                type="text"
                                                placeholder="műfaja!"
                                                value={values.genre}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.genre && touched.genre ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.genre && touched.genre && (
                                                <div className={"invalid-feedback"}>{errors.genre}</div>
                                            )}
                                        </div>
                                        <p className="card-text">This user will be modified!</p>
                                        <button type="submit" disabled={isSubmitting}
                                                className={"btn btn-success card-link"}>
                                            Modosítás
                                        </button>
                                        <button onClick={this.handleCloseModal} className={"btn btn-primary card-link"}>
                                            Mégse
                                        </button>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default ModifyElement