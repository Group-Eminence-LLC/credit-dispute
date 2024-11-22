import {React,useState} from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import SigninwithgoogleButton from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetError } from '../../../slices/authSlice';
import { TextField,CircularProgress, Alert, Grid2, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

 const paperStyle = {
        padding: 20,
        height: '90vh',
        width: 320,
        margin: "20px auto", // Adjusted for side-by-side positioning
        borderRadius: "20px",
        backgroundColor: "rgb(199,259,241)"
      };
      
return (
        <Grid2 container justifyContent="center" spacing={3}>
          {/* Login Paper */}
          <Grid2 item>
            <Paper elevation={10} style={paperStyle}>
              <Grid2 align='center'>
                <h1>CreditApp</h1>
            <h3>LOGIN</h3>
            </Grid2>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Email"
                variant="outlined"
                required
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
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
        <Button component={Link}
            to="/forgotpassword"
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
        <Button variant="contained" type="submit" disabled={loading}
        
         sx={{
        backgroundColor: 'black',
        color: 'white',
        marginTop: '8px',
        width: "100%",
        borderRadius:'25px',
        // optional spacing
        ':hover': {
          backgroundColor: 'darkgray',
          },
        mb:2,
      }}
    > LOGIN</Button>
    </form>
      <br />
 <Button component={Link}
           to="/signup"
           sx={{
            textTransform:'lowercase',
            fontSize: '0.875rem', // Optional: Adjusts font size
            alignSelf: 'flex-end', // Aligns to the right
            cursor: 'pointer', // Makes it look clickable
            color: 'black', // Optional: Add color for emphasis
            ':hover': {
              textDecoration: 'underline', 
            },
            mb:2,
          }}
        >
        Don't have an account? Sign up</Button>

{/* Render Google Sign-in Button */}
        <SigninwithgoogleButton />
       </Paper>
          </Grid2>
      </Grid2>
);
  }
export default Login;
