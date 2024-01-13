import React from 'react';
import { WebsiteCards } from './HomePageComponents/WebsiteCards';
import { DrawerAppBar } from './globalComponents/Header';
import Box from '@mui/system/Box';
import { styled } from '@mui/material';

const StyledHomePage = styled('div')({
    backgroundColor: '#242b2c',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
});

const Homepage = () => {

    return (
        <StyledHomePage>

            <DrawerAppBar  />

            <Box component="section" sx={{ p: 10 }}>
                <WebsiteCards /> 
            </Box>
            
        </StyledHomePage>
    );
}


export default Homepage;
