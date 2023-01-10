import React from 'react'
import ClientDetails from './components/ClientDetails/ClientDetails'
import Dates from './components/Dates/Dates'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainDetails from './components/MainDetails/MainDetails'
import Notes from './components/Notes/Notes'
import Table from './components/Table/Table'

const App = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='m-5 p-6 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
      <div>
        <Header handlePrint={handlePrint} />
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer /> 
      </div>
    </div>
  )
}

export default App
