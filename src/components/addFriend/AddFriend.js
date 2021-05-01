// import React from "react";

// const AddFriend = () => {
//   return (
//     <div>
//       <div className="add-friend-icon-div">
//         <i className="fad fa-plus" style={{fontSize:"50px"}}></i>
//       </div>
//     </div>
//   );
// };

// export default AddFriend;

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      <i className="fad fa-plus" style={{fontSize:"50px"}}></i>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Invite Friends</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Invite your freinds to connect with chat video and photos.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;