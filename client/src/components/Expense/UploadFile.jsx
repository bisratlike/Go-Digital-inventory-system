import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
            };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        setFile(droppedFile);
       
    };

    return (
        <div className="w-full md:w-[400px] relative">
            <Typography className='text-[20px] font-montserrat lg:text-[20px] font-bold py-[2rem] lg:pb-2'>Drag and drop your receipt or upload file</Typography>
            <div className="relative" onDragOver={handleDragOver} onDrop={handleDrop}>
                <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                    <input
                        type="file"
                        id="file-upload"
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        border="2px dashed #ccc"
                        borderRadius="10px"
                        width="100%"
                        height="200px"
                    >
                        <CloudUploadIcon sx={{ fontSize: 80, color: '#ccc' }} />
                        <Typography variant="body1" color="textSecondary">
                        Drag and drop or click to upload
                        maximum file size is 7MB
                        </Typography>
                    </Box>
                </label>
                {file && (
                    <Typography variant="body1" color="textPrimary" mt={2}>
                        {file.name}
                    </Typography>
                )}
            </div>
        </div>
    );
}

export default UploadFile;
