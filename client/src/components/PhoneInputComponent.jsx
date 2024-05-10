import React from 'react'
import { Typography, Input } from '@material-tailwind/react'

const PhoneInputComponent = () => {
  return (
    <div className="customer__phone w-full md:w-[220px]">
        <Typography className='text-[20px] font-montserrat lg:text-[20px] text-[1rem] font-bold py-[2rem] lg:pb-2'>Customer Phone <span className="asterisk text-[#ff0000]">*</span></Typography>
        <Input className='p-1 rounded-md'/>
    </div>
  )
}

export default PhoneInputComponent