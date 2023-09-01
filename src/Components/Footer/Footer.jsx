import React from 'react'

export default function Footer() {
  const Year=new Date().getFullYear()
  return (
    <>
    <div className="container-fluid bg-warning">
      <div className="container text-center">
      <div className="row p-2">
        <div className="col "><h5 className='mb-1'>&copy; {Year} Copy All Right Reserved </h5></div>
      </div>
      </div>
    </div>
    </>
  )
}
