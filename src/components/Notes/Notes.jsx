import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
        <section className='mt-8 mb-5'>
          <p>{notes}</p>
        </section>
    </>
  )
}

export default Notes