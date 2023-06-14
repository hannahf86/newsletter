import React from 'react'

const Form = () => {
 
  const styles = {
    text: 'text-[#36384E] font-semibold mb-4 text-sm',
    input: 'border rounded-xl border-[#242742] py-4 px-4 w-full mb-8',
    button: 'bg-gradient-to-r from-pink-500 to-[#FF6257] p-4 rounded-xl w-full text-white font-bold',
  }
 
  return (
    <div>

      <p className={styles.text}>Email address</p>
      <input type="text" placeholder='Enter your email here' className={styles.input}/>
      <button className={styles.button}>Subscribe to monthly newsletter</button>

    </div>
  )
}

export default Form
