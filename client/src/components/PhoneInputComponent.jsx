import React from 'react'
import { Typography, Input } from '@material-tailwind/react'
import { Controller } from 'react-hook-form'


const PhoneInputComponent = ({control, inputType}) => {
  return (
    <div className="customer__phone sm:w-[100%] md:w-[50%] lg:w-[70%]">
      <Typography className='font-montserrat lg:text-[20px] text-[1rem] font-bold py-[2rem] lg:pb-2'>{inputType} Phone <span className="asterisk text-[#ff0000]">*</span></Typography>
      <Controller
              name='phone'
              className="customer__phone flex flex-col w-full md:w-[16%] lg:flex-row item-center gap-3"
              control={control}
              rules={{ 
                required: 'Phone number is required!',
                pattern: {
                  value: /^\d{10}$/, // Example pattern for a 10-digit phone number
                  message: 'Please enter a valid 10-digit phone number'
                }
              }}
                render={({ field, fieldState }) => (
                <div className='input__error-container w-[100%]'>
                <Input {...field}
                  placeholder='Customer Phone'
                  error={fieldState.invalid}
                  helpertext={fieldState.error ? fieldState.error.message : ''}
                  className='px-[1rem] py-[.5rem] text-[.9rem] w-full lg:w-[30%] rounded-md' />
                  {fieldState.error && (
                    <Typography className="text-red-500 inline text-xs mt-1">{fieldState.error.message}</Typography>
                  )}
                </div>
              )}
            />
    </div>
  )
}

export default PhoneInputComponent