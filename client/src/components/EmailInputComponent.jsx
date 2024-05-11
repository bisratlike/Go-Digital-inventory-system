import React from 'react'
import { Typography, Input } from '@material-tailwind/react';

const EmailInputComponent = () => {
  return (
    <div className="customer__email w-[220px] md:w-[220px] pb-[2rem]">
        <Typography className='font-montserrat lg:text-[20px] text-[1rem] font-bold py-[2rem] lg:pb-2'>Customer Email <span className="asterisk text-[#ff0000]">*</span></Typography>
        <Input className='p-1 w-[290px] rounded-md'/>
    </div>
  )
}

export default EmailInputComponent