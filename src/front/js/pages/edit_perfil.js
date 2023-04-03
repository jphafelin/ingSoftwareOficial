import React, { useState, useContext, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/register.css"


export const EditPerfil = () => {

    
    const { store, actions } = useContext(Context);
    const [error, setError] = useState("")
    const navigate = useNavigate();

 const userId = JSON.parse(localStorage.getItem("userId")) 

  useEffect(() => {
      actions.getUserInfo(userId.id)
      actions.getInfoParticipante(userId.id)
       
    }, [])
    

    const user = store.user?.result
    const participante = store.participante?.result

    console.log(participante?.name)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            last_name: '',
            numero_telefono: '',
            nombre_contacto_emergencia: '',
            numero_contacto_emergencia: '',
            asistencia_medica: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address'),
            password: Yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/, 'La contraseña deber tener 6 a 10 caracteres, 1 mayúscula, 1 minúscula y 1 número. No puede tener caracteres especiales'),
            name: Yup.string().max(15, 'Maximo 15 caracteres'),
            last_name: Yup.string().max(45, 'Maximo 45 caracteres'),
            numero_telefono: Yup.string().max(9, 'Maximo 9 carateres'),
            nombre_contacto_emergencia: Yup.string().max(50, 'Maximo 50 caracteres'),
            numero_contacto_emergencia: Yup.string().max(9, 'Maximo 9 carateres'),
            asistencia_medica: Yup.string().max(45, 'Maximo 45 caracteres'),
        }),

        /* onSubmit: values => {
            alert(JSON.stringify((values.email, values.password, values.name, values.last_name, values.numero_telefono, values.nombre_contacto_emergencia, values.numero_contacto_emergencia, values.asistencia_medica)));
        }, */

        onSubmit: async (values) => {
            try {
                const updateSuccesful = await actions.getActualizarParticipante(values.email, values.password, values.name, values.last_name, values.numero_telefono, values.nombre_contacto_emergencia, values.numero_contacto_emergencia, values.asistencia_medica);
                console.log(updateSuccesful)
                if (updateSuccesful) {
                   setError("Datos modificados correctamente")
                } 
                
            } catch (error) {
                console.log(error);
                setError("Ha ocurrido un error con la actualización de datos. Por favor revisa la información ingresada e inténtalo nuevamente")
            }
        },
    })






    return (
        <section className="register-section vh-100 vw-100">
            <div className="register-box" >
                <form className="form-signin" onSubmit={formik.handleSubmit}>
                    <h1>Editar Perfil</h1>
                    <div className="form-containter row">
                    <div className="left-div col">
                        <div className="textbox">
                            <i class="fa-solid fa-envelope" />
                            <input type="text" className="form-control" placeholder="Email"  autoFocus="" id="email"
                                name="email" onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.email}
                                defaultValue={user?.email} />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                        <div className="textbox">
                            <i className="fa fa-lock" aria-hidden="true" />
                            <input type="password" className="form-control" placeholder="Nueva contraseña"  id="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                        <div className="textbox">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" className="form-control" name="name" placeholder="Nombre" id="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.name}
                                defaultValue={participante?.name}
                                 autoFocus="" />
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-danger">{formik.errors.name}</div>
                        ) : null}
                        <div className="textbox">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" className="form-control" name="last_name" placeholder="Apellidos" id="last_name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.last_name}
                                defaultValue={participante?.last_name}
                                 autoFocus="" />
                        </div>
                        {formik.touched.last_name && formik.errors.last_name ? (
                            <div className="text-danger">{formik.errors.last_name}</div>
                        ) : null}
                    </div>
                    <div className="right-div col">
                        <div className="textbox">
                            <i class="fa-solid fa-phone"></i>
                            <input type="number" className="form-control" name="numero_telefono" placeholder="Número de Teléfono" id="numero_telefono"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.numero_telefono}
                                defaultValue={participante?.numero_telefono}
                                 autoFocus="" />
                        </div>
                        {formik.touched.numero_telefono && formik.errors.numero_telefono ? (
                             <div className="text-danger">{formik.errors.numero_telefono}</div>
                        ) : null}
                        <div className="textbox">
                            <i class="fa-solid fa-user-injured"></i>
                            <input type="text" className="form-control" name="nombre_contacto_emergencia" placeholder="Nombre Contacto de Emergencia" id="nombre_contacto_emergencia"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.nombre_contacto_emergencia}
                                defaultValue={participante?.nombre_contacto_emergencia}
                                 autoFocus="" />
                        </div>
                        {formik.touched.nombre_contacto_emergencia && formik.errors.nombre_contacto_emergencia ? (
                            <div className="text-danger">{formik.errors.nombre_contacto_emergencia}</div>
                        ) : null}
                        <div className="textbox">
                            <i class="fa-solid fa-phone"></i>
                            <input type="number" className="form-control" name="numero_contacto_emergencia" placeholder="Número Contacto de Emergencia"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.numero_contacto_emergencia}
                                defaultValue={participante?.numero_contacto_emergencia}
                                 autoFocus="" />
                        </div>
                        {formik.touched.numero_contacto_emergencia && formik.errors.numero_contacto_emergencia ? (
                             <div className="text-danger">{formik.errors.numero_contacto_emergencia}</div>
                        ) : null}
                        <div className="textbox">
                            <i class="fa-solid fa-hospital"></i>
                            <input type="text" className="form-control" name="asistencia_medica" placeholder="Asistencia Médica" id="asistencia_medica"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // value={formik.values.asistencia_medica}
                                defaultValue={participante?.asistencia_medica}
                                  autoFocus="" />
                        </div>
                        {formik.touched.asistencia_medica && formik.errors.asistencia_medica ? (
                            <div className="text-danger">{formik.errors.asistencia_medica}</div>
                        ) : null}
                    </div>
                    </div>
                    <button className="rg-btn" type="submit">Guardar Cambios</button>
                    {error && <div className="text-white  text-center mt-3"><strong>{error}</strong></div>}

                </form>
            </div >
        </section>
    );
};

