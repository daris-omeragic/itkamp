import React from 'react'

import { colors, fontFamily, fontSize } from '../../util/theme';
import { Grid, TextField } from '@mui/material';
import SimplifiedDiv from '../SimplifiedDiv/SimplifiedDiv';
import Text from '../Text/Text';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Contact = () => {
    const styles = {
        containerStyle: {
            display: 'flex',
            alignItems: 'center',
            margin: ' 5% 10%',
        },

        lineStyle: {
            flex: '1',
            height: '0.1px',
            backgroundColor: colors.lightGray,
        },

        textStyle: {
            margin: '0 20px',
            textAlign: 'center',
            fontSize: "7px",
            color: colors.accentColor,
            fontFamaily: fontFamily.LatoRegular,
        },
        contactText : {
            fontSize: fontSize.optimal, 
            color: colors.gray, 
            margin: '7px 30px' 
        }

    }
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com');
      };
    
      const handleTwitterClick = () => {
        window.open('https://www.twitter.com');
      };
    
      const handleYouTubeClick = () => {
        window.open('https://www.youtube.com');
      };
      const handleWhatsappClick = () => {
        window.open('https://www.whatsapp.com/');
      };
    return (
        <>
            <div style={styles.containerStyle}>
                <div style={styles.lineStyle}></div>
                <div style={styles.textStyle}>
                    <h1>CONTACT US</h1>
                </div>
                <div style={styles.lineStyle}></div>
            </div>
            <Grid container direction="row" height="100vh" width="100%" padding='10%'>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <div style={{ ...styles.containerStyle, margin: '15px 3px' }}>
                        <div style={styles.lineStyle}></div>
                        <div style={styles.textStyle}>
                            <h1>GET IN TOUCH</h1>
                        </div>
                        <div style={styles.lineStyle}></div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <TextField label="Name" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <TextField label="Email" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField label="Subject" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField label="Your Message Here" fullWidth multiline inputProps={{ style: { height: '100px' } }} />
                            <button style={{ display: 'flex', color: colors.white, background: colors.accentColor, border: 'none ', cursor: 'pointer', padding: '5px', margin: '10px 0px' }}>Submit</button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div style={{ ...styles.containerStyle, margin: '15px 30px' }}>
                        <div style={styles.lineStyle}></div>
                        <div style={styles.textStyle}>
                            <h1>CONTACT INFO</h1>
                        </div>
                        <div style={styles.lineStyle}></div>
                    </div>
                    <SimplifiedDiv>
                        <Text style={styles.contactText}>E-Shopper Inc.</Text>
                        <Text style={styles.contactText}>935 W. Webster Ave New Streets Chicago, IL</Text>
                        <Text style={styles.contactText}>60614, NY</Text>
                        <Text style={styles.contactText}>Newyork USA</Text>
                        <Text style={styles.contactText}>Mobile: +2346 17 38 93</Text>
                        <Text style={styles.contactText}>Fax: 1-714-252-0026</Text>
                        <Text style={styles.contactText}>Email: info@e-shopper.com</Text>
                    </SimplifiedDiv>
                    <div style={{ ...styles.containerStyle, margin: '15px 30px' }}>
                        <div style={styles.lineStyle}></div>
                        <div style={styles.textStyle}>
                            <h1>SOCIAL NETWORKING</h1>
                        </div>
                        <div style={styles.lineStyle}></div>
                    </div>
                    <SimplifiedDiv style={{ display: 'flex', justifyContent: 'center', gap: "10px", color: colors.lightGray, cursor: 'pointer' }}>
                        <FacebookIcon  onClick={handleFacebookClick}/>
                        <TwitterIcon onClick = {handleTwitterClick} />
                        <YouTubeIcon onClick = {handleYouTubeClick} />
                        <WhatsAppIcon onClick={handleWhatsappClick} />
                    </SimplifiedDiv>
                </Grid>
            </Grid>
        </>
    );
};

export default Contact;