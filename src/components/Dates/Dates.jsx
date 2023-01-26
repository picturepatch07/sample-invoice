import React from 'react'

const Dates = ({invoiceNumber, invoiceDate, dueDate}) => {
  return (
    <>
        <article className='mt-5 mb-5 pb-2 flex items-end justify-end'>
          <ul>
            <li className='p-1'><span className='font-bold'>Invoice Number: </span>{invoiceNumber}</li>
            <li className='p-1'><span className='font-bold'>Invoice Date: </span>{invoiceDate}</li>
            <li className='p-1'><span className='font-bold'>Due Date: </span>{dueDate}</li>
          </ul>
        </article>
    </>
  )
}

export default Dates
