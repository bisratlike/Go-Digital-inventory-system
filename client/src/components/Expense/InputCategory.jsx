import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const InputCategory = () => {
    const [inputValue, setInputValue] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const options = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (value) => {
        setInputValue(value);
        handleClose();
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        setInputValue(value);
        const filtered = options.filter(option =>
            option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    return (
        <div className="w-full md:w-[400px] relative">
            <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'></Typography>
            <div className="relative">
                <TextField
                    fullWidth
                    label="Category Name"
                   
                    value={inputValue}
                    onClick={handleClick}
                    onChange={handleInputChange}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={handleClick}>
                                <SearchIcon style={{color:'black', background:'orange'}}/>
                            </IconButton>
                        ),
                    }}
                />
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {filteredOptions.map(option => (
                        <MenuItem key={option} onClick={() => handleMenuItemClick(option)}>{option}</MenuItem>
                    ))}
                </Popover>
            </div>
        </div>
    );
}

export default InputCategory;
