import React, { useRef } from 'react'
import { Input, InputAdornment, IconButton, styled, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const StyledSearchContainer = styled('div')({
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const StyledSearchField = styled(Input)({
  width: '300px',
  height: '57px',
  marginBottom: '0px',
  backgroundColor: '#fff',
  borderRadius: '7px',
  // border:'4px solid #eba80a',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
  padding: '8px',
  // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '& input': {
    fontSize: '18px'
  }
})

const SearchComponent = ({ searchQuery, onSearchChange, onClearSearch }) => {
  const inputRef = useRef(null)

  return (
    <Box sx={{ alignItems: 'center' }}>
      <StyledSearchContainer>
        <StyledSearchField
          ref={inputRef}
          placeholder='Search...'
          startAdornment={
            <InputAdornment position='start'>
              {searchQuery ? (
                <IconButton size='small' aria-label='clear search' onClick={onClearSearch}>
                  <CloseIcon />
                </IconButton>
              ) : (
                <SearchIcon />
              )}
            </InputAdornment>
          }
          value={searchQuery}
          onChange={onSearchChange}
        />
      </StyledSearchContainer>
    </Box>
  )
}

export default SearchComponent
