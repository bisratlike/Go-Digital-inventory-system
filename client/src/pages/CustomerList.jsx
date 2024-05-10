import React from 'react'
import ListTable from '../components/ListTable'
import SideBar from '../components/SideBar'
import { Button,Typography  } from "@material-tailwind/react";
import MainNavBar from '../components/MainNavBar';

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
    </div>
    </div>
    </div>
  )
}

export default CustomerList