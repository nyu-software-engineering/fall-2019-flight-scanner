import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';


const styles = theme => ({

  box: {
      marginBottom: "0",
      width: "80%",
      minWidth: "250px",

  },
  button: {
    color: '#2E3B55',
    '&:hover': {
        background: '#2E3B55',
        color: 'white'
    }
}

});

class EditDialog extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
     
  //   }
  // }

  handleClose = () => {
    this.setState({
      open: false
    })
    this.props.close()
  };



  render() {
    const { classes } = this.props

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
        >
          <DialogTitle>{"Edit Teammember"}</DialogTitle>
          <DialogContent>
                <Grid item xs={12} sm={12} xl={12}>
                  <TextField
                    disabled 
                    id="gmail"
                    label="Gmail"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    className={classes.box}
                    defaultValue={this.props.gmail}
                  />
                </Grid>
                <Grid item xs={12} sm={12} xl={12}>
                  <TextField
                    id="first_name"
                    label="First Name"
                    margin="normal"
                    variant="outlined"
                    className={classes.box}
                    onChange={this.handleChange}
                    defaultValue={this.props.firstName}

                  />
                </Grid>

                <Grid item xs={12} sm={12} xl={12}>

                  <TextField
                    id="last_name"
                    label="Last Name"
                    margin="normal"
                    variant="outlined"
                    className={classes.box}
                    onChange={this.handleChange}
                    defaultValue={this.props.lastName}
                  />
                </Grid>

                <Grid item xs={12} sm={12} xl={12}>

                  <TextField
                    id="role"
                    label="Role"
                    margin="normal"
                    variant="outlined"
                    className={classes.box}
                    onChange={this.handleChange}
                    defaultValue={this.props.role}

                  />
                </Grid>

                <Grid item xs={12} sm={12} xl={12}>

                  <TextField
                    id="access"
                    label="Access"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    className={classes.box}
                    defaultValue={this.props.access}
                  />
                </Grid>

          </DialogContent>
          <DialogActions style={{justifyContent:'center'}}>
            <Button onClick={this.handleClose} className={classes.button}>
              Cancel
          </Button>
            <Button onClick={this.handleClose} className={classes.button}>
              Save changes
          </Button>
          </DialogActions>
        </Dialog>
      </div >
    );
  }
}

export default withStyles(styles)(EditDialog);

EditDialog.defaultProps = {
  open: false,
}