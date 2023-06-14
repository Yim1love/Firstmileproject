import * as React from 'react';


import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import GridViewIcon from '@mui/icons-material/GridView';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <DensitySmallIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <GridViewIcon />
      </ToggleButton>
      
    </ToggleButtonGroup>
  );
}