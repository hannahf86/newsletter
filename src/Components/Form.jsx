import React from 'react';
import ReactDOM from 'react-dom/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Form = () => {
  
  // Formik Logics
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    // Validate Form
    validationScheme: Yup.object({
      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    }),

    // Submit Form
    onSubmit:(values) => {
      <Link to='/Success'></Link>
    }
  });

  const styles = {
    input: 'border rounded-xl border-[#242742] p-4 w-full mb-8 mt-4',
    button: 'bg-gradient-to-r from-pink-500 to-[#FF6257] p-4 rounded-xl w-full text-white font-bold',
    error: 'text-red-600 font-bold mb-4 text-md text-center m-4'
  }


  return (
    <div>

      <form>
        <label className= {`text-[#36384E] font-semibold pb-2 text-sm ${formik.touched.email && formik.errors.email} ? "text-red-500" : " " ` }>
          { formik.errors.email ? formik.errors.email : " Email address "}
        </label>
        <input 
          className={ styles.input }
          type="email" 
          placeholder='Enter your email here' 
          name='email' 
          required
          value={ formik.values.email }
          onChange = { formik.handleChange }
          onBlur = { formik.handleBlur }
        />
        <button 
          type='submit' 
          className={styles.button} 
          onSubmit = { formik.handleSubmit }>Subscribe to monthly newsletter</button>
      </form>

    </div>
  )
}

export default Form
