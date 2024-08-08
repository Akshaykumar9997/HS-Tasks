import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <h1> TASK 1 </h1>
        <TextField
          id="filled-multiline-flexible"
          label="Task name"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="End Date"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div>

      <div>
      <h1> TASK 2 </h1>
        <TextField
          id="filled-multiline-flexible"
          label="Task name"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="End Date"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div>
      <div>
        <h1> TASK 3 </h1>
        <TextField
          id="filled-multiline-flexible"
          label="Task name"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="End Date"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div>
     
    </Box>
  );
}