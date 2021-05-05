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
    if (inputValue) {
      let myEmail = localStorage.getItem("email");
      const usersRef = app.firestore().collection("users").doc(inputValue);
      const myRef = app.firestore().collection("users").doc(myEmail);

      usersRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          console.log("user exist.");
          let requestList = docSnapshot.data().friendsRequest;
          let ifExist = requestList.find((element) => {
            return element.from === myEmail && element.to === inputValue;
          });
          if (!ifExist) {
            requestList.push({ from: myEmail, to: inputValue });
            usersRef.set({
              friendsRequest: requestList,
              userName: docSnapshot.data().userName,
              uid: docSnapshot.data().uid,
              userEmail: docSnapshot.data().userEmail,
              friends: docSnapshot.data().friends,
            });
            myRef.get().then((docSnapshot) => {
              let requestList = docSnapshot.data().friendsRequest;
              requestList.push({ from: myEmail, to: inputValue });
              myRef.set({
                friendsRequest: requestList,
                userName: docSnapshot.data().userName,
                uid: docSnapshot.data().uid,
                userEmail: docSnapshot.data().userEmail,
                friends: docSnapshot.data().friends,
              });
            });
            handleClose();
          } else {
            alert("Alredy request sent...");
            handleClose();
          }
        } else {
          console.log("user not exist.");
          alert("user not exist.");
        }
      });
    } else {
      alert("Empty Field.");
    }
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
