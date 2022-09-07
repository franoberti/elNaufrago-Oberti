import React from 'react'

const Spinner = () => {
  return (
    <div>
        <div className="spinner-grow p-4 m-4" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow p-4 m-4" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow p-4 m-4" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Spinner
