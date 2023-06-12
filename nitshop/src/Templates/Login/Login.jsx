import React, { useContext, useEffect, useState } from 'react'
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from '../../components/Text/Text';
import { Grid } from '@mui/material';
import { colors, fontSize } from '../../util/theme';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { UserContext } from '../../context/UserContext';
import { fetchAllUsers } from '../../api/userApi';

const Login = () => {
  const styles = {
    mainDiv: {
      padding: "5% 10%",
    },
    textStyle: {
      fontSize: fontSize.medium,
      marginBottom: "20px",
      color: colors.gray,
    },
    inputStyle: {
      padding: "10px 5px",
      marginBottom: "15px",
      border: 'none',
      background: colors.secondColor
    },
    checkboxWrapper: {
      display: "flex",
      marginBottom: "20px",
      alignItems: "center",
      gap: "5px",
    },
    buttonStyle: {
      width: "80px",
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      fontSize: fontSize.optimal,
      border: "none",
      color: colors.white,
      backgroundColor: colors.accentColor,
      height: '10px',
      borderRadius: '0px'
    },
    roundDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.accentColor,
      borderRadius: "50%",
      color: colors.white,
      width: "60px",
      height: "60px",
      marginTop: "40px",
      marginLeft: "60px",
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
    },
  };

  const [users, setUsers] = useState([]);

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    let mount = true;

    fetchAllUsers().then((allUsers) => {
      if (mount) {
        setUsers(allUsers);
      }
    });
    return () => {
      mount = false;
    };
  }, []);
  console.log(users);


  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
  
    const enteredName = e.target[0].value;
    const enteredEmail = e.target[1].value;
  
    const loggedInUser = users.find((user) => user.name === enteredName && user.email === enteredEmail);
  
    if (loggedInUser) {
      setUser({
        name: loggedInUser.name,
        email: loggedInUser.email,
      });
  
      console.log('Logged in!');
    } else {
      console.log('Invalid credentials!');
    }
  };

  const userNamesAndEmails = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });
  
  console.log(userNamesAndEmails);
  



  return (
    <Grid item lg={12} style={styles.mainDiv} container>
      <Grid item lg={5} md={5} display='flex' flexDirection='column'>
        <form onSubmit={loginHandler} style={styles.formStyle}>
          <Text style={styles.textStyle}>Login to your acoount</Text>
          <input
            style={styles.inputStyle}
            type='text'
            placeholder='Name'
            required
          />
          <input
            style={styles.inputStyle}
            type='email'
            placeholder='Email'
            required
          />
          <SimplifiedDiv style={styles.checkboxWrapper}>
            <input type='checkbox' />
            <Text>Keep me signed in</Text>
          </SimplifiedDiv>
          <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
        </form>
      </Grid>
      <Grid item lg={2} display='flex'>
        <div style={styles.roundDiv}>OR</div>
      </Grid>
      <Grid item lg={5} display='flex' flexDirection='column'>
        <Text style={styles.textStyle}>New User Signup!</Text>
        <form onSubmit={submitHandler} style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type='text'
            placeholder='Name'
            required
          />
          <input
            style={styles.inputStyle}
            type='email'
            placeholder='Email Address'
            required
          />
          <input
            style={styles.inputStyle}
            type='password'
            placeholder='Password'
            required
          />
          <PrimaryButton style={styles.buttonStyle}>Signup</PrimaryButton>
        </form>
      </Grid>
    </Grid>
  );
};
export default Login;

