import React from 'react'

const Table = () => {
  return (
    <>
        <table width='100%'>
          <thead>
            <tr className='bg-gray-100'>
              <td>Item</td>
              <td>Description</td>
              <td>Brief</td>
              <td>Number</td>
              <td>Length</td>
              <td>Width</td>
              <td>Height</td>
              <td>Quantity</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Some really long description</td>
              <td>Briefing about product</td>
              <td>1</td>
              <td>10</td>
              <td>15</td>
              <td>20</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

          <button className=' bg-red-400 text-white font-bold py-2 px-8 rounded shadow border-1 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-6'>Add Items</button>

          <button className=' bg-yellow-400 text-white font-bold py-2 px-8 rounded shadow border-1 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mx-2'>Add Description</button>

          <button className=' bg-green-400 text-white font-bold py-2 px-8 rounded shadow border-1 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Add Brief</button>
    </>
  )
}

export default Table