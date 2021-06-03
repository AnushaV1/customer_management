import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from "yup";
import CustomerAPI from "../CustomerAPI";

const AddNewCustomer = () => {

    const initialValues = {
        firstname: '',
        lastname:  '',
        address: '',
        city: '',
        state:'',
        email:'',
        phone:''
    }
    
    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required!'),
        lastname: Yup.string().required('Required!'),
        address: Yup.string().required('Required!'),
        city: Yup.string().required('Required!'),
        state:Yup.string().required('Required!'),
        phone:Yup.number().required('Required!'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required!')
    })

    const onSubmit = async(values) => {
        //console.log(values);
        try {
            const res = await CustomerAPI.AddNewCustomer(values);

        }
        catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div className="container">
        <div className="row">
        <div className="col-lg-6 offset-lg-3 form-wrapper">
        <h2>Add New Customers</h2>
        <Formik initialValues={initialValues} validationSchema= {validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <Field type="text" name="firstname"
                    placeholder="First Name" 
                    className='form-control'
                />
                <ErrorMessage name ="firstname" render={msg => <div className="error">{msg}</div>} />
            
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <Field type="text" name="lastname"  placeholder="Last Name"
                    className='form-control' />
                    <ErrorMessage name ="lastname"  render={msg => <div className="error">{msg}</div>} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Address</label>
                <Field type="text" name="address"  placeholder="Address"
                    className='form-control'
                />
                <ErrorMessage name ="address" render={msg => <div className="error">{msg}</div>} />
            
            </div>
        <div className="form-group">
        <label htmlFor="state">State</label>
        <Field as="select" name="state" placeholder="State"
            className='form-control'>
            <option value="California" default>California</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
            <option value="Washington">Washington</option>
            </Field>
            <ErrorMessage name ="state" render={msg => <div className="error">{msg}</div>} />
        </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <Field as="select" name="city" placeholder="City"
                    className='form-control'>
                    <option value="San Jose" default>San Jose</option>
                    <option value="Cupertino">Cupertino</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="San Diego">San Diego</option>
                    </Field>
                    <ErrorMessage name ="city" render={msg => <div className="error">{msg}</div>} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="text" name="email"
                    placeholder="Email" className='form-control'
                />
                <ErrorMessage name ="email" render={msg => <div className="error">{msg}</div>} />
            </div>
            <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field type="phone" name="phone"
                    placeholder="Phone" className='form-control'
                />
                <ErrorMessage name ="phone" render={msg => <div className="error">{msg}</div>} />
            </div>
                    
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
            
                    Add User
                </button>{' '}
                <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
        </Form>
        </Formik>
    </div>
    </div>
    </div>
    )
}

export default AddNewCustomer;
