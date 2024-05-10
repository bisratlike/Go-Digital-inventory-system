import React from 'react'
import { Typography, Radio } from '@material-tailwind/react';

const CustomerType = ({inputType}) => {
  return (
    <>
        <Typography className='text-[20px] font-montserrat lg:text-[20px] text-[1rem] font-bold py-[2rem] lg:pb-2'>{inputType} Type <span className="asterisk text-[#ff0000]">*</span></Typography>
        <div className="options flex gap-3 text-[.9rem] lg:text-[16px] font-[500]">
            <Radio name='business' label='Business' defaultChecked/>
            <Radio name='individual' label='Individual'/>
        </div>
    </>
  )
}

export default CustomerType