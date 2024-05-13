import React from 'react';
import { Typography, Radio, Select, Option, Input, Button } from '@material-tailwind/react';
import { Controller } from 'react-hook-form';

const PrimaryContact = ({ control }) => {
  return (
    <div className="primary__contact">
      <Typography className='font-montserrat lg:text-[20px] text-[1rem] font-bold lg:pb-2'>Primary Contact <span className="asterisk text-[#ff0000]">*</span></Typography>
      <div className="input__field-container sm:w-[100%] md:w-[50%] lg:w-[70%] flex flex-col lg:flex-row gap-3 mt-2 item-center justify-between">
            <Controller
            className="salutation__options flex flex-col w-full md:w-[16%] lg:flex-row item-center gap-3"
              name="salutation"
              control={control}
              rules={{ required: 'Salutation is required!' }}
              render={({ field, fieldState }) => (
                <div className='input__error-container w-[100%]'>
                  <Select {...field} className='p-5 rounded-md text-[.9rem] hello flex justify-between items-center'>
                    <Option value="">Select...</Option>
                    <Option value="Mr.">Mr.</Option>
                    <Option value="Mrs.">Mrs.</Option>
                    <Option value="Ms.">Ms.</Option>
                    <Option value="Miss">Miss.</Option>
                    <Option value="Dr.">Dr.</Option>
                  </Select>
                  {fieldState.error && (
                    <Typography className="text-red-500 inline text-xs mt-1">{fieldState.error.message}</Typography>
                  )}
                </div>
              )}
            />
            <Controller
              name='firstName'
              className='w-full lg:w-[16%]'
              control={control}
              rules={{ 
                required: 'First name is required!',
                pattern: {
                  value: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                  message: 'First name should only contain letters and spaces'
                },
                maxLength: {
                  value: 20,
                  message: 'First name cannot be longer than 20 characters'
                }
              }}
              render={({ field, fieldState }) => (
                <div className="input__error-container w-[100%]">
                  <Input {...field}
                    placeholder='First Name'
                    error={fieldState.invalid}
                    helpertext={fieldState.error ? fieldState.error.message : ''}
                    className='px-[1rem] py-[.5rem] text-[.9rem] rounded-md' />
                     {fieldState.error && (
                    <Typography className="text-red-500 inline text-xs mt-1">{fieldState.error.message}</Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name='lastName'
              className='w-full lg:w-[16%]'
              control={control}
              rules={{
                required: 'Last name is required!',
                pattern: {
                  value: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                  message: 'Last name should only contain letters and spaces'
                },
                maxLength: {
                  value: 20,
                  message: 'Last name cannot be longer than 20 characters'
                }
              }}
              render={({ field, fieldState }) => (
                <div className="input__error-container w-full">
                  <Input {...field}
                  placeholder='Last Name'
                  error={fieldState.invalid}
                  helpertext={fieldState.error ? fieldState.error.message : ''}
                  className='px-[1rem] py-[.5rem] text-[.9rem] w-full rounded-md' />
                  {fieldState.error && (
                    <Typography className="text-red-500 inline text-xs mt-1">{fieldState.error.message}</Typography>
                  )}
                </div>
                
              )}
            />
        </div>
    </div>
  );
};

export default PrimaryContact;
