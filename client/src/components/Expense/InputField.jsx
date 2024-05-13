import React, { useState } from 'react';
import { Typography, Input, Button} from '@material-tailwind/react';
import Footer from '../Footer'
import InputCategory from './InputCategory';
import Grid from '@mui/material/Grid';
import InputTax from './InputTax';

import UploadFile from './UploadFile'
import InputVendor from './InputVendor';
import InputDate from './InputDate';


const InputField = () => {
  return (
    <div>
      <div className="customer_type p-[1rem] sm:p-[1.5rem] lg:p-[3rem] w-full font-montserrat">
       <InputDate />
       <InputCategory />  
    
                <div className="w-full md:w-[400px]">
                    <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'>Amount(ETB)</Typography>
                    <Input
                        className='p-1 rounded-md'
                        placeholder='Amount(ETB)'
                    />
                </div>
         
        <InputTax />       
        <InputVendor />      
           <div className="w-full md:w-[400px]">
        <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'>Sales Person</Typography>
        <Input className='p-1 rounded-md'/>
    </div>
        <div className="w-full md:w-[400px]">
        <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'>Reference# <span className="asterisk text-[#ff0000]">*</span></Typography>
        <Input className='p-1 rounded-md'/>
    </div>
    <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={8} md={6}>
      <div className=" w-full md:w-[400px] h-40">
        <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'>Notes </Typography>
        <Input 
      
        placeholder='max. 500 Characters'
        className='p-1 rounded-md w-full h-20 bottom-10'/>
    </div> 
       </Grid>
                 <Grid item xs={12} md={6}>
                <UploadFile />
            </Grid>
        </Grid>   
  
<div className='flex items-center justify-between top-padding-5'>
    <Button className='bg-primary-color hover:bg-primary-color-hover px-[24px] py-[16px] mt-[2.5rem] rounded-[4px]'>Save</Button>

</div>

      </div>
      <Footer/>
    </div>
  );
};

export default InputField;
