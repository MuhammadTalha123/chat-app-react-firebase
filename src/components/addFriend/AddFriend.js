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

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { app } from "../../firebase/firebaseConfig";

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInviteFriend = () => {
    let inputValue = document.getElementById("invite-email-input").value;
    console.log(inputValue);
    const usersRef = app.firestore().collection("users").doc(inputValue);

    usersRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        usersRef.onSnapshot((doc) => {
          // do stuff with the data
          console.log("user exist.");
        });
      } else {
        console.log("user not exist.");
        // create the document
      }
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <i className="fas fa-plus" style={{ fontSize: "50px" }}></i>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Invite Friends</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Invite your freinds to connect with chat video's and photo's.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="invite-email-input"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleInviteFriend} color="primary">
            Invite Friend
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
