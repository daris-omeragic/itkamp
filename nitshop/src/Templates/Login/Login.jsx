import React, { useContext } from 'react'
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from '../../components/Text/Text';
import { Grid } from '@mui/material';
import { colors, fontFamily, fontSize, fontWeight } from '../../util/theme';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { UserContext } from '../../context/UserContext';

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
  const { userDetails, setUserDetails } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserDetails({
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (userDetails.email !== e.target[0].value) return;
    if (userDetails.password !== e.target[1].value) return;
    console.log('logged in!')
  }


  console.log(userDetails)
  return (
    <Grid lg={12} style={styles.mainDiv} container item>
      <Grid lg={5} display="flex" flexDirection="column">
        <form onSubmit={loginHandler} style={styles.formStyle}>
          <Text style={styles.textStyle}>Login to your acoount</Text>
          <input
            style={styles.inputStyle}
            type="mail"
            placeholder="E-mail"
            required
          />
          <input
            style={styles.inputStyle}
            type="password"
            placeholder="password"
            required
          />
          <SimplifiedDiv style={styles.checkboxWrapper}>
            <input type="checkbox" />
            <Text style={{ fontSize: fontSize.optimal }}>Keep me signed in</Text>
          </SimplifiedDiv>
          <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
        </form>
      </Grid>
      <Grid lg={2} display="flex">
        <div style={styles.roundDiv}>OR</div>
      </Grid>
      <Grid lg={5} display="flex" flexDirection="column">
        <Text style={styles.textStyle}>New User Signup!</Text>
        <form onSubmit={submitHandler} style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Name"
            required
          />
          <input
            style={styles.inputStyle}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            style={styles.inputStyle}
            type="password"
            placeholder="Password"
            required
          />
          <PrimaryButton style={styles.buttonStyle}>Signup</PrimaryButton>
        </form>
      </Grid>
    </Grid>
  );
};
export default Login;

