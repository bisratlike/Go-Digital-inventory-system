import React from 'react'
import { Typography, Radio, Input } from '@material-tailwind/react'



const InputMainField = () => {
  return (
    <div>
      <div className="customer_type p-6">
        <Typography className='text-[20px] font-bold pb-2'>Customer Type</Typography>
        <div className="options flex gap-3">
          <Radio name='type' label='Business' color='black' defaultChecked/>
          <Radio name='type' label='Individual'/>

        </div>
      </div>
    </div>
  )
}

export default InputMainField