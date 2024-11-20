import React from 'react'
import { Grid2, Paper, Avatar, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import SigninwithgoogleButton from '../../../hooks/useAuth';
const Landing= () => {

    const paperStyle = {
        padding: 20,
        height: '75vh',
        width: 280,
        margin: "40px 20px 40px 20px", // Adjusted for side-by-side positioning
        borderRadius: "20px",
        backgroundColor: "rgb(79, 238, 249)"
      };
    
      const avatarStyle = { backgroundColor: "black" };
      const emergingPaperStyle = {
        position: 'absolute',
        top: '-1px', // Adjust to move it slightly above the other papers
        left: '50%',
        transform: 'translateX(-50%)', // Centers it horizontally
        width: 300,
        height: '80%',
        backgroundColor: '#eeeded',
        zIndex: -1, // Ensures it's behind the other papers
        borderRadius: '25px',
        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)', 
        margin:'30px'
        
        // Optional for extra shadow effect
    
      };
    
      return (
        <Grid2 container justifyContent="center" spacing={3}>
          {/* Login Paper */}
          <Grid2 item>
            <Paper elevation={10} style={paperStyle}>
              <Grid2 align='center'>
                {/*
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                */}
                <h3>LOGIN</h3>
              </Grid2>
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
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
    
    
    
    
    
    
    
              
              <TextField
                fullWidth
                label="Password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    height: '45px',
                  },
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
    
    
    
           />} label="Remember me?" />
          
        </FormGroup>
        <Button href="#text-buttons"
           sx={{
            textTransform: 'lowercase', // Converts text to lowercase
            fontSize: '0.875rem', // Optional: Adjusts font size
            alignSelf: 'flex-end', // Aligns to the right
            cursor: 'pointer', // Makes it look clickable
            color: 'black', // Optional: Add color for emphasis
            ':hover': {
              textDecoration: 'underline', // Adds underline on hover
            },
          }}
        >
        
        
        
        
        
        Forgot password</Button>
         <br/>
        <Button variant="contained"
         sx={{
        backgroundColor: 'black',
        color: 'white',
        marginTop: '8px',
        width: "100%",
        borderRadius:'25px',
        // optional spacing
        ':hover': {
          backgroundColor: 'darkgray',
          
          // optional hover effect
        },
        mb:2,
      }}
    
    
        >LOGIN</Button>  <br />

        

        {/* Render Google Sign-in Button */}
        <SigninwithgoogleButton />

       


            </Paper>
          </Grid2>
        {/* Emerging Paper */}
        <Grid2 >
            <Paper elevation={10} style={emergingPaperStyle} />
            <Grid2 item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
            </Grid2>
           
          </Grid2>
    
    
    
    
    
    
    
    
    
    
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
        // optional spacing
        ':hover': {
          backgroundColor: 'darkgray',
          
          // optional hover effect
        },
      }}
    
    
        >SIGNUP</Button>
    
        
    
    
    
            </Paper>
          </Grid2>
        </Grid2>
      );






}

export default Landing;
