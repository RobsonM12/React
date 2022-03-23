import React from 'react'
import {Box, Grid,Typography} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer() {
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center">

<Grid alignItems="center" item xs={12}>

    <Box style={{backgroundColor: '#3F51B5', height: '120px'}}>
        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" gutterBottom style={{color: 'white'}}>Siga-nos nas redes sociais </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noreferrer">
                <FacebookIcon style={{fontSize: 60, color:'white'}} />
            </a>
            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noreferrer">
                <InstagramIcon style={{fontSize: 60, color:'white'}} />
            </a>
            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noreferrer">
                <LinkedInIcon style={{fontSize: 60, color:'white'}} />
            </a>
        </Box>
    </Box>

    <Box className="box2">
        <Box paddingTop={1}>
            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2020 Copyright:</Typography>
        </Box>
        <Box>
            <a target="_blank" href="https://brasil.generation.org" rel="noreferrer">
                <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
            </a>
        </Box>
    </Box>

</Grid>

</Grid>
    </>
  )
}

export default Footer;