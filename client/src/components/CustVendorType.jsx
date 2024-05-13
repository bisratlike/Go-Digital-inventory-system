import React from 'react'
import { Typography, Radio } from '@material-tailwind/react';

const CustVendorType = ({inputType}) => {
  return (
    <div className='pb-[2rem]'>
        <Typography className='font-montserrat lg:text-[20px] text-[1rem] font-bold'>{inputType} Type <span className="asterisk text-[#ff0000]">*</span></Typography>
        <div className="options flex gap-3 text-[.9rem] lg:text-[16px] font-[500]">
           <Radio className='my__radio clicked' type="radio" name="color" label="Business" defaultChecked/>
           <Radio type="radio my__radio" name="color" label="Individual" />
        </div>
    </div>
  )
}

export default CustVendorType