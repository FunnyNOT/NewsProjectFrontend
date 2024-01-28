import React from 'react'
import { Input, InputAdornment, IconButton, Fab, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const StyledSearchContainer = styled('div')({
  position: 'fixed',
  top: '80px',
  right: '18px',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center'
})

const StyledSearchButton = styled(Fab)({
  cursor: 'pointer',
  backgroundColor: 'rgba(170, 170, 170, 0.5)',
  color: '#23282f',
  fontSize: '15px',
  borderColor: '#23282f',
  marginLeft: '10px',
  padding: '10px',
  '&:hover': {
    backgroundColor: 'rgba(170, 170, 170, 0.25)'
  }
})

const StyledSearchField = styled(Input)({
  marginRight: '8px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '& input': {
    fontSize: '14px'
  }
})

const SearchComponent = ({ searchQuery, onSearchChange, onSearchIconClick, onClearSearch, isSearchFieldVisible }) => {
  return (
    <StyledSearchContainer>
      {isSearchFieldVisible && (
        <StyledSearchField
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
      )}
      <StyledSearchButton size='medium' aria-label='search' onClick={onSearchIconClick}>
        <SearchIcon />
      </StyledSearchButton>
    </StyledSearchContainer>
  )
}

export default SearchComponent
