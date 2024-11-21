import {React,useState} from 'react';
import { Grid2, Paper, Avatar, TextField } from '@mui/material';
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
    e.preventDefault();
    if (!policyAccepted) {
      alert('Please accept the privacy and policy to proceed.');
      return;
    }
    dispatch(signUpUser(formData));
  };
const paperStyle = {
        padding: 20,
        height: '90vh',
        width: 320,
        margin: "20px auto", 
        borderRadius: "20px",
        backgroundColor: "rgb(199,259,241)"
      };
return (
    <Box sx={{
      alignItems:"center",
      border: '1px solid #ccc', // Add a border to the box
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow

    }}>
   
{/* Signup Paper */}
<Grid2 item>

            <Paper elevation={10} style={paperStyle}>
            <h1>Sign up here</h1>
              <Grid2 align='center'>
                <h3>SIGNUP</h3>
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
      }}
       >SIGNUP</Button>
    </form>
</Paper>
    </Grid2>
</Box>
    )
}

export default Signup;
