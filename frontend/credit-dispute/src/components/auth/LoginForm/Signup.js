import React from 'react';
import { Grid2, Paper, Avatar, TextField } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const Signup = () => {
    const paperStyle = {
        padding: 20,
        height: '75vh',
        width: 280,
        margin: "20px auto", 
        borderRadius: "20px",
        backgroundColor: "rgb(79, 238, 249)"
      };




  return (
    <div className='signup-section'>
        <h1>Sign up here</h1>
{/* Signup Paper */}
<Grid2 item>
            <Paper elevation={10} style={paperStyle}>
              <Grid2 align='center'>
                {/*
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                */}
                <h3>SIGNUP</h3>
              </Grid2>
              <TextField
                fullWidth
                label="First name"
                placeholder="First name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    height: '45px',
                  },
                  mb: 2,
                }}
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon/>
                        </InputAdornment>
                      ),
                    },
                  }}
              />
               <TextField
                fullWidth
                label="Last name"
                placeholder="Last name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    height: '45px',
                  },
                  mb: 2,
                }}
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon/>
                        </InputAdornment>
                      ),
                    },
                  }}
              />
           <TextField
                fullWidth
                label="Email"
                placeholder="Email"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    height: '45px',
                  },
                  mb: 2,
                }}
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon/>
                        </InputAdornment>
                      ),
                    },
                  }}
              />
    
              <TextField
                fullWidth
                label="Password"
                placeholder="Password"
                type="password"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    height: '45px',
                  },
                  mb:2,
                }}
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
              />
               <TextField
                fullWidth
                label=" Confirm Password"
                placeholder="Confirm Password"
                type="password"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    height: '45px',
                  },
                  mb:2,
                }}
                slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
    
    
              />
               <FormGroup>
          <FormControlLabel control=
          {<Checkbox defaultChecked
            
          sx={{
              color: 'black', // Black border for the checkbox
              '&.Mui-checked': {
                color: 'black', // Black tick and border when checked
              },
            }}
            />} label="Accept privacy and policy?" />
    </FormGroup>
        <br/>
        <Button variant="contained"
         sx={{
        backgroundColor: 'black',
        color: 'white',
        marginTop: '8px',
        width: "100%",
        borderRadius:'25px',
        ':hover': {
          backgroundColor: 'darkgray',
          },
      }}
       >SIGNUP</Button>
    </Paper>
          </Grid2>


      
    </div>
  )
}

export default Signup
