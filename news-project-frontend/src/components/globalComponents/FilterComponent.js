import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Box,
  Chip,
  OutlinedInput,
  useTheme,
  useMediaQuery
} from '@mui/material'

const FilterComponent = ({ allTags, selectedTags, onTagChange }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleDeleteChip = (tagToDelete) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToDelete)
    const syntheticEvent = {
      target: {
        value: updatedTags
      }
    }
    onTagChange(syntheticEvent)
  }

  return (
    <Box
      backgroundColor='#eba80a'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1
      }}
    >
      <div
        style={{
          height: '55px',
          width: isSmallScreen ? '250px' : '300px',
          marginBottom: isSmallScreen ? '5px' : '0px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          marginTop: isSmallScreen ? '8px' : isMediumScreen ? '8px' : '0px'
        }}
      >
        <FormControl fullWidth>
          <InputLabel id='tags-label'>Select Tags </InputLabel>
          <Select
            labelId='tags-label'
            id='tags'
            multiple
            value={selectedTags}
            input={<OutlinedInput label='Select Tags' />}
            onChange={(event) => onTagChange(event)}
            // renderValue={(selected) => 'Select Tags'}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={{ variant: 'menu' }}
          >
            {allTags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                <Checkbox checked={selectedTags.includes(tag)} />
                <ListItemText primary={tag} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Display deletable chips for selected tags */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '8px', marginTop: '8px' }}>
        {selectedTags.map((tag) => (
          <Chip key={tag} label={tag} onDelete={() => handleDeleteChip(tag)} style={{ margin: '3px', backgroundColor: '#fff' }} />
        ))}
      </Box>
    </Box>
  )
}

export default FilterComponent

// import React from 'react';
// import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Box, Chip } from '@mui/material';

// const FilterComponent = ({ allTags, selectedTags, onTagChange }) => {
//   const handleDeleteChip = (tagToDelete) => {
//     const updatedTags = selectedTags.filter((tag) => tag !== tagToDelete);
//     onTagChange(updatedTags);
//   };

//   return (
//     <Box backgroundColor='#fff' sx={{ width: '25%', zIndex: 1000 }}>
//       <FormControl fullWidth>
//         <InputLabel id="tags-label">Select Tags</InputLabel>
//         <Select
//           labelId="tags-label"
//           id="tags"
//           multiple
//           value={selectedTags}
//           onChange={onTagChange}
//           renderValue={(selected) => selected.join(', ')}
//         >
//           {allTags.map((tag) => (
//             <MenuItem key={tag} value={tag}>
//               <Checkbox checked={selectedTags.includes(tag)} />
//               <ListItemText primary={tag} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       {/* Display deletable chips for selected tags */}
//       <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '8px' }}>
//         {selectedTags.map((tag) => (
//           <Chip
//             key={tag}
//             label={tag}
//             onDelete={() => handleDeleteChip(tag)}
//             style={{ margin: '4px' }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default FilterComponent;

// import React from 'react';
// import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Box } from '@mui/material';

// const FilterComponent = ({ allTags, selectedTags, onTagChange }) => {
//   return (
//     <Box backgroundColor='#fff' sx={{width:'25%', zIndex: 1000}}>
//       <FormControl fullWidth>
//         <InputLabel id="tags-label">Select Tags</InputLabel>
//         <Select
//           labelId="tags-label"
//           id="tags"
//           multiple
//           value={selectedTags}
//           onChange={onTagChange}
//           renderValue={(selected) => selected.join(', ')}
//         >
//           {allTags.map((tag) => (
//             <MenuItem key={tag} value={tag}>
//               <Checkbox checked={selectedTags.includes(tag)} />
//               <ListItemText primary={tag} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default FilterComponent;
