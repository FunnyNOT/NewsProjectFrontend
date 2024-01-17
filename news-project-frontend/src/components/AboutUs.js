import React from 'react';
import { Paper, Box, Typography, styled, createTheme, ThemeProvider } from '@mui/material';
import { DrawerAppBar } from './globalComponents/Header'

const StyledPage = styled('div')({
    backgroundColor: '#23282f',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 0, // Reset margin
    padding: 0, // Reset padding
    overflowX: 'hidden' ,// Prevent horizontal scrollbar
    minHeight: '100vh',
  })
  
const theme = createTheme({
palette: {
    primary: {
    main: '#23282f'
    }
}
})

const StyledPaper = styled(Paper)({
  padding: theme => theme.spacing(3),
  marginTop: theme => theme.spacing(3),
});

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme} >
        <StyledPage>
            <DrawerAppBar />
            <Box component='section' sx={{ p: 10 }}>
            <StyledPaper elevation={3}>
                <Typography variant="h4" gutterBottom>
                About Us
                </Typography>
                <Typography variant="body1">
                Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus,
                nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
                <Typography variant="body1">
                Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean
                eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis
                euismod semper.
                </Typography>
            </StyledPaper>
            </Box>
        </StyledPage>
    </ThemeProvider>
  );
};

export default AboutUs;