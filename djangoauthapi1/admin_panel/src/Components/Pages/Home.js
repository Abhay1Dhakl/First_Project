import React from "react";
import { TextField, Button, Box,  CircularProgress } from '@mui/material';
import { useProductMutation } from "../Serve/userAuthapi";

export default function Home() {
  const [product, {isLoading}] = useProductMutation();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
		const actualData = {
			product_id: data.get('product_id'),
			product_name: data.get('product_name'),
		
		}
		console.log(actualData)
		await product(actualData)
  }
  return (
    <div>
            <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
							<TextField margin='normal' required fullWidth id='product_id' name='product_id' label='product id' type='number'/>
							<TextField margin='normal' required fullWidth id='product_name' name='product_name' label='product name' type='text'/>
							<Box textAlign='center'>

			 {isLoading ? <  CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Submit</Button>}


							</Box>

						</Box>
    </div>
  );
}
