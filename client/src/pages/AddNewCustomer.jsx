import React from 'react'
import SideBar from '../components/SideBar'
import NewInputHeader from '../components/NewInputHeader'
import  InputMainField  from '../components/InputMainField'
import { MainNavBar } from '../components'



const AddNewCustomer = () => {
  return (
    <div className="pageContainer">
      <div className="nav__bar-container">
        <MainNavBar />
      </div>

      <div className="hero__container flex">
        <SideBar/>
          <div className="main__field-container w-full p-0 lg:p-6">
            <NewInputHeader title='Customer' />
            <InputMainField />
          </div>
      </div>
        
    </div>
  )
}

export default AddNewCustomer