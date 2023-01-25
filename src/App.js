import React, { useState } from 'react'
import ClientDetails from './components/ClientDetails/ClientDetails'
import Dates from './components/Dates/Dates'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainDetails from './components/MainDetails/MainDetails'
import Notes from './components/Notes/Notes'
import Table from './components/Table/Table'

const App = () => {

  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='m-5 p-6 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
      {showInvoice ?       <div>
        <Header handlePrint={handlePrint} />
        <MainDetails  name={name} address={address} />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer name={name} address={address} email={email} website={website} /> 
        
        <button onClick={() => setShowInvoice(false)} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-tansparent hover:text-blue-500 transition-all duration-300'>Edit Information</button>

      </div> : (
        <>
          <div className='flex flex-col justify-center'>
            <label htmlFor='name'>Enter Your Name</label>
            <input 
            type="text" 
            name='text' 
            id='name' 
            placeholder='Enter Your Name' 
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

            <label htmlFor='address'>Enter Your Address</label>
              <input 
              type="text" 
              name='address' 
              id='address' 
              placeholder='Enter Your Address' 
              autoComplete='off'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
          />

            <label htmlFor='email'>Enter Your Email</label>
              <input 
              type="email" 
              name='email' 
              id='email' 
              placeholder='Enter Your Email' 
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />

            <label htmlFor='website'>Enter Your Website</label>
              <input 
              type="url" 
              name='website' 
              id='email' 
              placeholder='Enter Your Website' 
              autoComplete='off'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
          />

            <label htmlFor='phone'>Enter Your Phone</label>
              <input 
              type="int" 
              name='phone' 
              id='phone' 
              placeholder='Enter Your Phone Number' 
              autoComplete='off'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
          />

            <label htmlFor='bankName'>Enter Your Bank Name</label>
              <input 
              type="text" 
              name='bankName' 
              id='bankName' 
              placeholder='Enter Your Bank Name' 
              autoComplete='off'
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
          />

            <label htmlFor='bankAccount'>Enter Your Bank Account</label>
              <input 
              type="int" 
              name='bankAccount' 
              id='bankAccount' 
              placeholder='Enter Your Bank Account' 
              autoComplete='off'
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
          />

            <label htmlFor='clientName'>Enter Client Name</label>
              <input 
              type="text" 
              name='clientName' 
              id='clientName' 
              placeholder='Enter Client Name' 
              autoComplete='off'
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
          />

            <label htmlFor='clientAddress'>Enter Client Address</label>
              <input 
              type="text" 
              name='clientAddress' 
              id='clientAddress' 
              placeholder='Enter Client Address' 
              autoComplete='off'
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
          />

            <label htmlFor='invoiceNumber'>Enter Invoice Number</label>
              <input 
              type="int" 
              name='invoiceNumber' 
              id='invoiceNumber' 
              placeholder='Enter Invoice Number' 
              autoComplete='off'
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
          />

            <label htmlFor='invoiceDate'>Enter Invoice Date</label>
              <input 
              type="date" 
              name='invoiceDate' 
              id='invoiceDate' 
              placeholder='Enter Invoice Date' 
              autoComplete='off'
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
          />

            <label htmlFor='dueDate'>Enter Due Date</label>
              <input 
              type="date" 
              name='dueDate' 
              id='dueDate' 
              placeholder='Enter Due Date' 
              autoComplete='off'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
          />

            <label htmlFor='notes'>Enter Notes</label>
              <input 
              type="text" 
              name='notes' 
              id='notes' 
              placeholder='Enter Notes' 
              autoComplete='off'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
          />

          <button onClick={() => setShowInvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-tansparent hover:text-blue-500 transition-all duration-300'>Preview Invoice</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
