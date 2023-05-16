import React,{useContext} from 'react'
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
        border : 'none',
        background : colors.secondColor
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
        height : '10px',
        borderRadius : '0px'
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
    const { setUserDetails} = useContext(UserContext);
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserDetails({
        name: e.target[0].value,
        email: e.target[1].value,
      });
    };
    return (
      <Grid xs={12} sm={12} md={12} lg={12} style={styles.mainDiv} container item>
        <Grid lg={5} display="flex" flexDirection="column">
          <Text style={styles.textStyle}>Login to your acoount</Text>
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
          <SimplifiedDiv style={styles.checkboxWrapper}>
            <input type="checkbox" />
            <Text style={{fontSize : fontSize.optimal}}>Keep me signed in</Text>
          </SimplifiedDiv>
          <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
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

    