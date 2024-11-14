import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Button,
  CircularProgress,
  Typography,
  Alert,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../Hooks/index.mjs'; // Import the custom useAuth hook
import { useVerifyToken } from '../Hooks/useVerifyToken'; // Import the useVerifyToken hook
import { useDispatch } from 'react-redux';
import {SetFormDataLogin} from "../store/slice/questionnaireSlice"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { login, loading, error, data } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Use the custom useVerifyToken hook to verify token on component mount
  const { loading: verifyingToken, error: verifyError,success:verifySucces ,userRole} = useVerifyToken();

  const handleSubmit = () => {
    setValidationError('');

    if (!email || !password) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    login(email, password);
  };

  // Handle successful login by redirecting to the dashboard
  useEffect(() => {
    
    if (data && data.status === 200) {
     
     
      let dataObj={};
      try{
       
        if (typeof data?.data?.form === 'string') {

          dataObj = JSON.parse(data?.data?.form);
      } else if (typeof data?.data?.form === 'object') {
      
          dataObj = data?.data?.form; // If it's already an object, use it directly
      } else {
          console.error("Invalid form_data:", data?.data?.form);
          //return; // Exit if form_data is neither a string nor an object
      }


      
      dispatch(SetFormDataLogin({ data: dataObj }));
    }
    catch(err){
      console.error("there is non data",err);
      
      
    }
      //navigate('/dashboard'); // Redirect to /dashboard on successful login
    } else if (data) {
      setValidationError('Login failed. Please check your credentials.');
    }
  }, [data, navigate]);

  useEffect(() => {
    console.log("state:",userRole.state)
    if(verifySucces  ){
    
      if(userRole.role === "1" ){
        navigate('/dashboard'); 
      }
      else{
        if(userRole.state ==="0"){
            navigate('/profile'); 
        }
        else{
          //go to page tell u have to wait
          navigate('/profile'); 
        }

        
      }
      //
    }
    else{
      //setValidationError('You do not have permission.');
    }
  }, [verifySucces]);
  
  // Show a loading spinner while verifying the token
  if (verifyingToken) {
    return <CircularProgress sx={{ mt: 8 }} />;
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      {validationError && (
        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
          {validationError}
        </Alert>
      )}
      {error && (
  <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
    {typeof error.message === 'string' ? error.message : 'An error occurred during login. Please try again.'}
  </Alert>
)}
{verifyError && (
  <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
    {typeof verifyError.message === 'string' ? verifyError.message : 'An error occurred while verifying your session. Please log in again.'}
  </Alert>
)}


      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />

      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
        sx={{ mt: 3, mb: 2 }}
      >
        {loading ? (
          <>
            <CircularProgress size={24} sx={{ mr: 1 }} />
            Signing in...
          </>
        ) : (
          'Sign in'
        )}
      </Button>

      <Button
        fullWidth
        variant="text"
        sx={{ mt: 1 }}
        onClick={() => console.log('Forgot password clicked')}
      >
        Forgot password?
      </Button>
    </Container>
  );
};

export default Login;
