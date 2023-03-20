import React, { useState } from "react"; 
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const Register = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/, 'La contraseña deber tener 6 a 10 caracteres, 1 mayúscula, 1 minúscula y 1 número. No puede tener caracteres especiales').required('Este campo es requerido'),
        }),
        onSubmit: values => {
            alert(JSON.stringify((values.email, values.password)));
        },

        /* onSubmit: async(values) => {
            try {
                const registerSuccesful = await actions.register(values.email, values.password);
                if (registerSuccesful) {
                  navigate("/login");
                } else {
                  setError("Ha ocurrido un error con los datos ingresados")
                }
              } catch (error) {
                console.log(error);
                setError("Ha ocurrido un error con el registro. Por favor revisa la información ingresada e inténtalo nuevamente")
              }
            },
          },
 */
    });
    

    
    return (
        <div className="wrapper">
            <form className="form-signin" onSubmit={formik.handleSubmit}>
                <h2 className="form-signin-heading">Registrate</h2>
                <input type="text" className="form-control" placeholder="Email" required="" autoFocus="" id="email"
                    name="email" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <input type="password" className="form-control" placeholder="Contraseña" required="" id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button className="btn btn-lg btn-primary btn-block" type="submit">Registrate</button>
            </form>
        </div>

    );
};