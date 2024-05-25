/* eslint-disable no-useless-escape */
import { Alert, Box, Button, Snackbar, Stack, TextField } from '@mui/material';
import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form"

const currencies = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',

  },
  {
    value: 'User',
    label: 'User',

  },

];
const Profile = () => {

  // @ts-ignore
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhone = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal ,open} = state;
  const handleClick = (newState) => {
    setState({ ...newState, open: true });
  };

  // @ts-ignore
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({ ...state, open: false });
  };

  const onSubmit = () => {
    console.log("data")
    handleClick({ vertical: 'top', horizontal: 'right' });
  }
 
  return (
    <Box onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"}>

        <TextField sx={{ flex: 1 }}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "Incorrect entry." : null}
          {...register("firstName", { required: true, maxLength: 20 })}
          label="First Name" variant="filled" />

        <TextField sx={{ flex: 1 }}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "Incorrect entry." : null}
          {...register("lastName", { required: true, maxLength: 20 })}
          // {...register("lastName", { pattern: /^[A-Za-z]+$/i })} 
          label="Last Name" variant="filled" />

      </Stack>

      <TextField
        error={Boolean(errors.Email)}
        helperText={errors.Email ? "Incorrect entry." : null}
        {...register("Email", { required: true, pattern: regEmail })}
        label="Email" variant="filled" />

      <TextField label="Number" 
        error={Boolean(errors.Number)}
        {...register("Number", { required: true, pattern: regPhone })}
        helperText={errors.Number ? "Incorrect entry." : null} 
        variant="filled" />

      <TextField label="Address" error={Boolean(errors.Address)}
        helperText={errors.Address ? "Incorrect entry." : null} 
        {...register("Address", { required: true, maxLength: 50 })}
        variant="filled" />


      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        helperText="Please select your currency"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Snackbar open={open} autoHideDuration={4000} anchorOrigin={{ 
// @ts-ignore
      vertical, horizontal }} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' , }}
        >
          cerating user success!
        </Alert>
      </Snackbar>

      <Box sx={{ textAlign: "right" }}>
        <Button type='submit' 
        sx={{ textTransform: "capitalize" }} variant='contained'>Create New User</Button>
      </Box>

    </Box>
  )
}
export default Profile;