import React from 'react';
import { Typography, Input } from '@material-tailwind/react';

const InputDate = () => {
  const today = new Date().toISOString().split('T')[0];
  return (
    <div className="w-full md:w-[400px]">
      <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2 justify-between'>Date </Typography>
      <Input 
        type="date"
        defaultValue={today}
        className='p-1 rounded-md'
      />
    </div>
  );
}

export default InputDate;
