import React, { useState } from 'react';
import { Typography, Radio, Select, Option, Input, Button } from '@material-tailwind/react';
import CustomerType from './CustomerType';
import PrimaryContact from './PrimaryContact';
import { EmailInputComponent } from '../components'
import { PhoneInputComponent } from '../components'
import Footer from '../components/Footer'



const InputMainField = () => {
  return (
    <div>
      <div className="customer_type p-[1rem] sm:p-[1.5rem] lg:p-[3rem] w-full font-montserrat">
        <CustomerType  inputType='Customer'/>
        <PrimaryContact />
        <EmailInputComponent />
        <PhoneInputComponent />
        <Button className='bg-primary-color hover:bg-primary-color-hover px-[24px] py-[16px] mt-[2.5rem] rounded-[4px]'>Add Customer</Button>
      </div>
      <Footer/>
    </div>
  );
};

export default InputMainField;
