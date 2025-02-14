import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const CommonwithLayout
 = ({children} : any) => {
  return (
    <div className='container mx-auto border'>
      <Navbar/>
      <div className='min-h-screen '>
      {children}
      </div>
      <Footer/>
        
    </div>
  )
}

export default CommonwithLayout
