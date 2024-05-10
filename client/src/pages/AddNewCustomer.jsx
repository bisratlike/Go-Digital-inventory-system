import React from 'react'
import SideBar from '../components/SideBar'
import NewInputHeader from '../components/NewInputHeader'
import  InputMainField  from '../components/InputMainField'
import Footer from '../components/Footer'


const AddNewCustomer = () => {
  return (
    <div className="pageContainer flex">
        <SideBar/>
        <div className="main__field-container w-full p-6 pl-0">
          <NewInputHeader title='Customer' />
          <InputMainField />
          {/* <Footer/> */}
        </div>
        
        
    </div>
  )
}

export default AddNewCustomer