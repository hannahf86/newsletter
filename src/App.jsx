import React from 'react'
import List from './Components/List'
import Form from './Components/Form'

function App() {

  const styles = {
    background: 'bg-white pl-32 pr-8 ',
    title: 'text-7xl font-bold text-[#36384E] mt-32 mb-12',
    textBox: 'max-w-lg',
    paragraph: 'text-[#36384E] text-xl mb-12',
    image: 'absolute right-0 top-0 pt-8 pb-8 pr-8',
  }

  return (
    <>
    <div className={styles.background}>

      <div>
        <h1 className={styles.title}>Stay updated!</h1>

        <div className={styles.textBox}>
          <p className={styles.paragraph}>Join 60,000+ product managers receiving monthly updates on:</p>
          <List />
          <Form />
        </div>
     </div>

     <img width={565} src='./src/assets/images/illustration-sign-up-desktop.svg' className={styles.image}/>
     </div>
    </>
  )
}

export default App
