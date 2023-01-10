import React from 'react'
import ClientDetails from './components/ClientDetails/ClientDetails'
import Header from './components/Header/Header'
import MainDetails from './components/MainDetails/MainDetails'
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

        {/* Dates */}
        <article className='mt-5 mb-5 flex items-end justify-end'>
          <ul>
            <li><span className='font-bold'>Invoice Number: </span></li>
            <li><span className='font-bold'>Invoice Date: </span></li>
            <li><span className='font-bold'>Due Date: </span></li>
          </ul>
        </article>
        {/* End of Dates  */}

        <Table />

        {/* Notes */}
        <section className='mt-8 mb-5'>
          <p>Notes to the client...</p>
        </section>
        {/* End of Notes */}

        {/* Footer */}
        <footer>
          <ul className='flex flex-wrap items-center justify-center'>
            <li><span className='font-bold'>Your Name: </span>Abhishek Anand</li>
            <li><span className='font-bold'>Your Email: </span>anand2000ys@gmail.com</li>
            <li><span className='font-bold'>Phone Number: </span>7763919260</li>
            <li><span className='font-bold'>Bank: </span>Bank Account</li>
            <li><span className='font-bold'>Account Holder: </span>Abhishek Anand</li>
            <li><span className='font-bold'>Account Number: </span>123 456 789</li>
            <li><span className='font-bold'>Website: </span>abhishek.co.in</li>
          </ul>
        </footer>
        {/* End of Footer */}
      </div>
    </div>
  )
}

export default App
