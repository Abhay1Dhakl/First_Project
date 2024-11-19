import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function UserPreference() {
    const currencies = [
        {
          value: 'Budget_Friendly',
          label: 'Budget_Friendly',
        },
        {
          value: 'Luxury',
          label: 'Luxury',
        },
        {
          value: 'Mid-range',
          label: 'Mid-range',
        },
     
      ];
  return (
    <>
    <h1>Fill form if you want recommendations</h1>
   
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
    
  >
   Prefered Activities: <TextField id="outlined-basic" label="Outlined" variant="outlined" /> <br/>
   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <div>
    
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="Luxury"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
   
 
  </Box>
  </>
  )
}
