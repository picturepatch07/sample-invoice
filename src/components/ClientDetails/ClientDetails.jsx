import React from 'react'

const ClientDetails = ({clientName, clientAddress}) => {
  return (
    <>
        <section className='mb-10'>
        <h2 className='text-xl uppercase'>{clientName}</h2>
        <h2>{clientAddress}</h2>
      </section>
    </>
  )
}

export default ClientDetails
