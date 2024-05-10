import React from 'react'
import { Typography } from '@material-tailwind/react'

const NewInputHeader = ({title}) => {
  return (
    <div className='border-b border-gray-300 px-6 py-4'>
       <Typography className="font-montserrat text-[25px] lg:text-[34px] font-bold">Add New {title}</Typography>
    </div>
  )
}

export default NewInputHeader