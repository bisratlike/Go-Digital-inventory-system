import React, { useState } from 'react';
import { Typography, Radio, Select, Option, Input, Button } from '@material-tailwind/react';
import {useForm} from 'react-hook-form'
import {CustomerType, PrimaryContact, EmailInputComponent, PhoneInputComponent, CompanyName} from '../components'
import Footer from '../components/Footer'


const InputMainField = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = data => {
    console.log(data);
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="customer_type p-[1rem] sm:p-[1.5rem] lg:p-[3rem] w-full font-montserrat">
          <CustomerType  inputType='Customer'/>
          <PrimaryContact control={methods.control} />
          <CompanyName />
          <EmailInputComponent control={methods.control}/>
          <PhoneInputComponent control={methods.control}/>
          <Button type='submit' onClick={onSubmit} className='bg-primary-color hover:bg-primary-color-hover px-[24px] py-[16px] mt-[2.5rem] rounded-[4px]'>Add Customer</Button>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default InputMainField;
