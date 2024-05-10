import React from 'react'
import SideBar from '../components/SideBar'
import NewInputHeader from '../components/NewInputHeader'
import  InputMainField  from '../components/InputMainField'



const AddNewCustomer = () => {
  return (
    <div className="pageContainer flex">
        <SideBar/>
        <div className="main__field-container w-full p-0 lg:p-6">
          <NewInputHeader title='Customer' />
          <InputMainField />
        </div>
        
        
    </div>
  )
}

export default AddNewCustomer