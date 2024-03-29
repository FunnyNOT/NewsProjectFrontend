import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { Button, CardActionArea, Divider, styled, useMediaQuery, useTheme } from '@mui/material'
import { fetchData } from '../../global_functions/ApiDataDisplay'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { createPseudoId } from '../../global_functions/CreatePseudoId'
import { normalizeGreekText } from '../../global_functions/NormalizeGreekText'

export default function WebsiteCards({ searchQuery }) {
  const [data, setData] = useState(null)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setData(result)
    }

    getData()
  }, [])

  const normalizedSearchQuery = normalizeGreekText(searchQuery)

  const filteredData = data
    ? data.filter((item) => normalizeGreekText(item.website_name).toLowerCase().includes(normalizedSearchQuery.toLowerCase()))
    : []

  const MyCard = styled(Card)({
    flexDirection: 'row',
    display: 'flex',
    marginBottom: isSmallScreen ? '-15px' : isMediumScreen ? '5px' : '20px',
    backgroundColor: '#23282f',
    width: '100%',
    height: isSmallScreen ? '105px' : isMediumScreen ? '180px' : '220px',
    justifyContent: 'center',
    alignItems: 'center'
  })

  const MyCardActionArea = styled(CardActionArea)({
    display: 'flex',
    width: isSmallScreen ? '100%' : '85%',
    height: isSmallScreen ? '80%' : 'auto',
    flexDirection: 'row',
    '&:hover': {
      backgroundColor: 'rgba(170, 170, 170, 0.15)'
    }
  })

  const navigate = useNavigate()

  const handleCardClick = (websiteImageName, websiteId) => {
    const pseudoId = createPseudoId(websiteId)

    navigate(`/${pseudoId}/${websiteImageName}`)
  }
  const handleButtonClick = (websiteLink) => {
    window.open(websiteLink, '_blank')
  }

  return (
    <>
      {filteredData.map((item, index) => (
        <React.Fragment key={index}>
          <MyCard variant={isSmallScreen ? 'outlined' : 'plain'} style={{ borderColor: '#f9f9f9', borderRadius: '10px' }} key={item}>
            <MyCardActionArea onClick={() => handleCardClick(item.website_image_name, item.website_id)}>
              <CardMedia
                component='img'
                image={`${process.env.PUBLIC_URL}/images/${item.website_image_name}.png`}
                alt=''
                style={{
                  width: '25%',
                  height: isSmallScreen ? '80%' : isMediumScreen ? '50%' : '25%',
                  marginLeft: isSmallScreen ? '10px' : isMediumScreen ? '20px' : '50px',
                  objectFit: isSmallScreen ? 'scale-down' : 'scale-down',
                  borderRadius: '10px'
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  style={{ color: '#eba80a', fontSize: isSmallScreen ? '14px' : isMediumScreen ? '16px' : '25px' }}
                >
                  {item.website_name}
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '11px' : isMediumScreen ? '12px' : '18px' }}
                >
                  {item.website_description.substring(0, isSmallScreen ? '100' : isMediumScreen ? '150' : '350') + '...'}
                </Typography>
              </CardContent>
            </MyCardActionArea>

            {!isSmallScreen && (
              <CardContent
                style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
              >
                <Button
                  variant='outlined'
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(170, 170, 170, 0.15)'
                    }
                  }}
                  style={{
                    color: '#f9f9f9',
                    fontSize: isSmallScreen ? '6px' : '10px',
                    borderColor: '#f9f9f9',
                    marginRight: isMediumScreen ? '20px' : '50px'
                  }}
                  endIcon={<ArrowOutwardIcon />}
                  onClick={() => handleButtonClick(item.website_link)}
                >
                  Visit
                  <br />
                  Website
                </Button>
              </CardContent>
            )}
          </MyCard>
          <Divider
            sx={{
              display: { xs: 'none', sm: 'block', md: 'flex' },
              color: '#f9f9f9',
              borderColor: '#f9f9f9'
            }}
          />
          <br />
        </React.Fragment>
      ))}
    </>
  )
}
