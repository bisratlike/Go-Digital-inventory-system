import React from 'react'
import { Typography, Radio, Select, Option, Input, Button } from '@material-tailwind/react';

const PrimaryContact = () => {
  return (
    <div className="primary__contact pb-[2rem]">
          <Typography className='font-montserrat lg:text-[20px] text-[1rem] font-bold lg:pb-2'>Primary Contact <span className="asterisk text-[#ff0000]">*</span></Typography>
          <div className="input__field-container flex gap-3 mt-2 item-center">
            <div className="salutaion__options flex flex-col lg:flex-row item-center gap-3">
                <div className="w-72">
                  <Select className='p-4 rounded-md'>
                    <Option>Mr.</Option>
                    <Option>Mrs.</Option>
                    <Option>Ms.</Option>
                    <Option>Miss.</Option>
                    <Option>Dr.</Option>
                  </Select>
                </div>
                <div className="inputs flex flex-col lg:flex-row  gap-3">
                  <Input className='p-1 rounded-md '/>
                  <Input className='p-1 rounded-md '/>
                </div>
            </div>
          </div>
        </div>
  )
}

export default PrimaryContact