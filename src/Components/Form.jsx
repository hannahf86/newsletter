import React from 'react';
import { useState, useEffect } from 'react';


const Form = () => {

  const styles = {
    text: 'text-[#36384E] font-semibold mb-4 text-sm',
    input: 'border rounded-xl border-[#242742] py-4 px-4 w-full mb-8',
    button: 'bg-gradient-to-r from-pink-500 to-[#FF6257] p-4 rounded-xl w-full text-white font-bold',
  }

  const [ email, setEmail ] = useState( " " )
  const [ isPending, setIsPending ] = useState( false )
  const [ error, setError ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)

    // console.log( newsletterForm )
  }

  useEffect(() => { // need to run at every render
      fetch ('http://localhost:8000/email', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email)
      })
      .then(res => {
        if(!res.ok) {
          throw Error ('Could not connect to server');
        }
        return res.json()
      })
      .then((data) => {
        setEmail(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      })
  });

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
