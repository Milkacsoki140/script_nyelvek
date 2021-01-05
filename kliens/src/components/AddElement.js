import React , { Component } from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import {AddNewSong} from "../actions/AddNewSong";

export const AddElement  = () => (
    <Formik
        initialValues={{title: "", performer: "", release:"", genre:""}}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                console.log(values)
                AddNewSong(values);
                setSubmitting(false);
            }, 1000);
        }}

        validationSchema={Yup.object().shape({
            title: Yup.string()
                .required(),
            performer: Yup.string()
                .required(),
            release: Yup.date()
                .required(),
            genre: Yup.string()
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
                            value={values.name}
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
                            value={values.address}
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
                            value={values.password}
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
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.genre && touched.genre ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.genre && touched.genre && (
                            <div className={"invalid-feedback"}>{errors.genre}</div>
                        )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className={"btn btn-primary"}>
                        Zene hozzáadása
                    </button>
                </form>
            );
        }}
    </Formik>
);