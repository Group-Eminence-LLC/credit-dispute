import {React,useState} from 'react';
import { Grid2, Paper, TextField } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, resetError } from '../../../slices/authSlice';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setPolicyAccepted(!policyAccepted);
  };

  const handleSubmit = (e) => {
    console.log('Form data being submitted:', formData);
    e.preventDefault();
    if (!policyAccepted) {
      alert('Please accept the privacy and policy to proceed.');
      return;
    

    }
    dispatch(signUpUser(formData));
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setPolicyAccepted(false);
  

    

  };
const paperStyle = {
        padding: 30,
        height: '95vh',
        width: 320,
        margin: "20px auto", 
        borderRadius: "20px",
        backgroundColor: "rgb(199,259,241)",
        transition: 'all 0.3s ease', // Smooth transition for transform and shadow
        '&:hover': {
          transform: 'scale(1.05)', // Slightly scale the paper on hover
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)', // Custom shadow effect
        },
      };
const ViewTermsPaperStyle = {
  padding: 30,
  height: '80vh',
  width: 320,
  borderRadius: '20px',
  backgroundColor: ' #fbf4f4 ',
  transition: 'all 0.3s ease', // Smooth transition for transform and shadow
  '&:hover': {
    transform: 'scale(1.05)', // Slightly scale the paper on hover
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)', // Custom shadow effect
  },
      };


return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between', // Space out the papers on each side
      alignItems: 'center',
      width: '100%',
      padding: '20px',
      gap:1,

    }}>

      {/* Left Paper */}
     <Grid2 item sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Paper elevation={10} style={{...ViewTermsPaperStyle,marginLeft:"30px",}} 
         
         
        > <h1>Welcome to the Sign up section</h1>
        
        </Paper>
       
        </Grid2>
   
{/* Signup Paper */}
<Grid2 item sx={{ display: 'flex', justifyContent: 'center' }}>

            <Paper elevation={10} style={paperStyle}>
            <h1>CreditApp</h1>
              <Grid2 align='center'>
                <h3>Sign up  here to create an account</h3>
              </Grid2>
              {error && (
            <Alert severity="error" onClose={() => dispatch(resetError())}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name='firstName'
                label="First name"
                placeholder="First name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleInputChange}
                
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
                name='lastName'
                label="Last name"
                placeholder="Last name"
                variant="outlined"
                value={formData.lastName}
                onChange={handleInputChange}
                
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
                name='email'
                label="Email"
                placeholder="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
                
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
                name='password'
                label="Password"
                placeholder="Password"
                type="password"
                variant="outlined"
                value={formData.password}
                onChange={handleInputChange}
                
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
                name='confirmPassword'
                label=" Confirm Password"
                placeholder="Confirm Password"
                type="password"
                variant="outlined"
                value={formData.confirmPassword}
                onChange={handleInputChange}
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
          {<Checkbox checked={policyAccepted}
            onChange={handleCheckboxChange}
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
         type="submit"
         disabled={loading}
         sx={{
        backgroundColor: 'black',
        color: 'white',
        marginTop: '8px',
        width: "100%",
        borderRadius:'25px',
        ':hover': {
          backgroundColor: 'darkgray',
          },
          mb:2,
      }}
       >SIGNUP</Button>
    </form>
    <Button component={Link}
           to="/"
           sx={{
           textTransform:'lowercase',
           fontSize: '0.875rem', // Optional: Adjusts font size
           alignSelf: 'flex-end', // Aligns to the right
            cursor: 'pointer', // Makes it look clickable
            color: 'black', // Optional: Add color for emphasis
            ':hover': {
              textDecoration: 'underline', 
            },
            
          }}
        >
        Already signed up? Login here</Button>

</Paper>
    </Grid2>

    <Grid2 >
            <Paper elevation={10} style={{...ViewTermsPaperStyle,marginRight:"35px",}}>
            <h1>Getting started with the CreditApp</h1>
            <h2>Sign up using your email and an OTP will be sent to your email to verify your account</h2>
               </Paper>
            <Grid2 item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
            
            </Grid2>
           </Grid2>
     


</Box>
    )
}

export default Signup;
