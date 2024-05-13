import React from 'react';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const InputTax = () => {
    return (
        <div className="w-full md:w-[400px] relative">
            <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'>Tax <span className="asterisk text-[#ff0000]">*</span></Typography>
            <div className="relative">
                <Select label="Select a Tax" fullWidth>
                    <MenuItem>5%</MenuItem>
                    <MenuItem>10%</MenuItem>
                    <MenuItem>15%</MenuItem>
                    <MenuItem>20%</MenuItem>
                    <MenuItem>25%</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default InputTax;
