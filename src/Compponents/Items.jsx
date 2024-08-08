import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Todo from './Todo';
import Button from '@mui/material/Button';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Items() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          width: '500px',
        // width: '100%',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
          <Tab label="TO DO" {...a11yProps(0)} sx={{ width: '33.33%', flexGrow: 1 }} />
          <Tab label="In Progress" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </Grid>
      <Grid item sx={{ width: '100%', textAlign: 'center' }}>
        <CustomTabPanel value={value} index={0} variant='fullWidth'>
          < Todo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}> 
        < Todo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        < Todo />
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
}
