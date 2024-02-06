import React from 'react'
import { Box, styled } from '@mui/material'
import SearchComponent from '../globalComponents/SearchComponent'
import FilterComponent from '../globalComponents/FilterComponent'
// import {useMediaQuery, useTheme} from '@mui/material';

const StyledSearchAndFilterContainer = styled(Box)(({ theme }) => ({
  width: '80%',
  height: '100%',
  marginBottom: '40px',
  borderRadius: '8px',
  padding: '10px',
  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  backgroundColor: '#23282f',
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '0 auto',
  flexDirection: 'column', // Default to column layout
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', // Change to row layout for medium and large screens
    alignItems: 'center', // Align items horizontally for row layout
    width: '80%'
  }
}))

const StyledSearchAndFilterContent = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: '0px',
  [theme.breakpoints.up('md')]: {
    flex: '1' // Occupy remaining space in row layout
  }
}))

const SearchAndFilterComponent = ({ searchQuery, onSearchChange, onClearSearch, allTags, selectedTags, onTagChange, visible }) => {
  return (
    <StyledSearchAndFilterContainer style={{ display: visible ? 'flex' : 'none' }}>
      <StyledSearchAndFilterContent>
        <SearchComponent searchQuery={searchQuery} onSearchChange={onSearchChange} onClearSearch={onClearSearch} />
      </StyledSearchAndFilterContent>
      <StyledSearchAndFilterContent>
        <FilterComponent allTags={allTags} selectedTags={selectedTags} onTagChange={onTagChange} />
      </StyledSearchAndFilterContent>
    </StyledSearchAndFilterContainer>
  )
}

export default SearchAndFilterComponent
