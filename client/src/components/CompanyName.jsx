import React from 'react'
import { Input, Typography } from '@material-tailwind/react'

const CompanyName = () => {
  return (
    <div className='sm:w-[100%] md:w-[50%] lg:w-[70%]'>
        <Typography className='font-montserrat lg:text-[20px] text-[1rem] font-bold py-[2rem] lg:pb-2'>Company Name</Typography>
        <Input className='px-[1rem] py-[.5rem] text-[.9rem] w-full lg:w-[30%] rounded-md' placeholder='Company Name'/>
    </div>
  )
}

export default CompanyName