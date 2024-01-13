import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Divider } from '@mui/material';
import { fetchData } from '../../global_functions/ApiDataDisplay';




export default function WebsiteCards() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };

        getData();
    }, []);
    return (
        <>
            {data && data.map((item, index) => (
                <>
                    <Card style={{  
                        display: 'flex',
                        margin: '5px', 
                        backgroundColor: '#242b2c', 
                        width: '100%',}}
                        variant="outlined" >

                        <CardActionArea 
                            href={item.website_link} 
                            style={{    display: 'flex', 
                                        width: '75%' }}>

                            <CardMedia
                                component="img"
                                height="180"
                                image={`${process.env.PUBLIC_URL}/images/defaultNewsImage.png`}
                                alt="green iguana"
                                style={{ width: '25%', borderRadius: '8px' }}
                            />

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div" style={{ color: '#da292f' }}>
                                    {item.website_name}
                                </Typography>
                                
                                <Typography variant="caption" color="text.secondary" style={{ color: '#f9f9f9' }}>
                                    {item.website_description.substring(0, 200) + '...'}
                                </Typography>
                            
                            </CardContent>

                        </CardActionArea>

                        <CardContent style={{   flex: '1', 
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                justifyContent: 'center', 
                                                alignItems: 'flex-end' }}>
                                        
                            <Button variant="contained" color="primary">
                                Visit
                                Website
                            </Button>

                        </CardContent>
                    
                    </Card>

                    <Divider style={{ color: '#f9f9f9', borderColor: '#f9f9f9' }} />
                </>
            ))}
        </>
    );
}

export { WebsiteCards };