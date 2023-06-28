import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

    }
  })

  const styles = {
    text: 'text-[#36384E] font-semibold mb-4 text-sm',
    input: 'border rounded-xl border-[#242742] py-4 px-4 w-full mb-8',
    button: 'bg-gradient-to-r from-pink-500 to-[#FF6257] p-4 rounded-xl w-full text-white font-bold',
  }


  return (
    <div>

      <p className={styles.text}>Email address</p>

      <form>
        <input 
          className={ styles.input }
          type="text" 
          placeholder='Enter your email here' 
          id='email' 
          required
          value={ formik.values.email }
          onChange = { formik.handleChange }
          onSubmit = { formik.handleSubmit }
        />
        <button type='submit' className={styles.button}>Subscribe to monthly newsletter</button>
      </form>

      

    </div>
  )
}

export default Form
