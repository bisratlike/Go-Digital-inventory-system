import React from 'react'
import ListTable from '../components/ListTable'
import SideBar from '../components/SideBar'
import { Button,Typography  } from "@material-tailwind/react";
import MainNavBar from '../components/MainNavBar';
import Footer from '../components/Footer';

const CustomerList = () => {
  return (

    <div>
        <MainNavBar/>
    <div className='flex'>
        <SideBar/>
      <div className='w-full'>
        <div className=' '>
          <ListTable dataType='Customer' /> 
        </div>
        <Footer />
    </div>
    </div>
    </div>
  )
}

export default CustomerList