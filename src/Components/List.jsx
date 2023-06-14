import React from 'react'

const List = () => {

  const styles = {
    list: 'flex text-[#36384E] font-semibold mb-4 text-xl',
    image: 'mr-6',
  }

  return (
    <div className='mb-12'>

      <div className={styles.list}>
        <img src="./src/assets/images/icon-list.svg" className={styles.image}/>
        <p>Product discovery and building what matters</p>
      </div>

      <div className={styles.list}>
        <img src="./src/assets/images/icon-list.svg" className={styles.image}/>
        <p>Measuring to ensure updates are a success</p>
      </div>

      <div className={styles.list}>
        <img src="./src/assets/images/icon-list.svg" className={styles.image}/>
        <p>And much more!</p>
      </div>

    </div>
  )
}

export default List
