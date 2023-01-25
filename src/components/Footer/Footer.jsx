import React from 'react'

const Footer = ({name, address, email, website}) => {
  return (
    <>
        <footer>
          <ul className='flex flex-wrap items-center justify-center'>
            <li><span className='font-bold'>Your Name: </span>{name}</li>
            <li><span className='font-bold'>Your Email: </span>{email}</li>
            <li><span className='font-bold'>Phone Number: </span>7763919260</li>
            <li><span className='font-bold'>Bank: </span>Bank Account</li>
            <li><span className='font-bold'>Account Holder: </span>{name}</li>
            <li><span className='font-bold'>Account Number: </span>123 456 789</li>
            <li><span className='font-bold'>Website: </span><a href={website} target='_blank' rel='noopenner noreferrer'>{website}</a></li>
          </ul>
        </footer>
    </>
  )
}

export default Footer