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

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='m-5 p-6 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
      {showInvoice ?       <div>
        <Header handlePrint={handlePrint} />
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer /> 
      </div> : (
        <>
          <div className='flex flex-col justify-center'>
            <input 
          type="text" 
          name='text' 
          id='text' 
          placeholder='Enter Your Name' 
          autoComplete='off'
          />

          <button onClick={() => setShowInvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-tansparent hover:text-blue-500 transition-all duration-300'>Preview Invoice</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
