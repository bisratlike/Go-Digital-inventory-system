import React from 'react'
import { Typography } from '@material-tailwind/react'

const NewInputHeader = ({title}) => {
  return (
    <div className='border-b border-gray-300 pt-4 pr-6 pb-4 pl-6'>
       <Typography className="font-roboto text-[34px] font-bold">Add New {title}</Typography>
    </div>
  )
}

export default NewInputHeader