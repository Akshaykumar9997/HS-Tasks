import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Addtask from '../Pages/Addtask';
import Taskdescription from './Taskdescription';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{textAlign:'center'}}>
      <Button variant="contained">View Task Details</Button>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"TASK DETAILS"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <Taskdescription/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}></Button>
          <Button onClick={handleClose} autoFocus>
        Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}