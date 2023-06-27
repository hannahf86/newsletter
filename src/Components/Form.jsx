import React from 'react';
import { useState } from 'react';


const Form = () => {

  const styles = {
    text: 'text-[#36384E] font-semibold mb-4 text-sm',
    input: 'border rounded-xl border-[#242742] py-4 px-4 w-full mb-8',
    button: 'bg-gradient-to-r from-pink-500 to-[#FF6257] p-4 rounded-xl w-full text-white font-bold',
  }

  const [ email, setEmail ] = useState( " " )
  const [ isPending, setIsPending ] = useState( false )

  const handleSubmit = (e) => {
    e.preventDefault();
    const newsletterForm = { email }

    setIsPending(true)

    // console.log( newsletterForm )
  }

  fetch ('http://localhost:8000/email', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email)
  }).then(() => {
    console.log('Email submitted successfully :D');
    setIsPending(false)
  })

  return (
    <div>

      <p className={styles.text}>Email address</p>

      <form onSubmit={ handleSubmit }>
        <input 
          className={ styles.input }
          type="text" 
          placeholder='Enter your email here' 
          id='email' 
          required
          value={ email }
          onChange = {(e) => setEmail(e.target.value)}
        />
        { !isPending && <button className={styles.button}>Subscribe to monthly newsletter</button>}
        { isPending && <button disabled className={styles.button}>Subscribing...</button>}
      </form>

      <p></p>

    </div>
  )
}

export default Form
