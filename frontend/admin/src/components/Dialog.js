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
  import axios from 'axios';


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
  },
  cancel: {
    color: 'red',
    '&:hover': {
        background: 'red',
        color: 'white'
    }
  }

});

class EditDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gmail: '',
      first_name:'',
      last_name: '',
      role:  '',
      access: ''
    }
  }

  handleClose = () => {
    this.props.close()
  }

  handleSaveClick = () => {
    const authorJSON = {
      "authorBio":this.props.info.authorBio,
      "authorEmail": this.props.info.authorEmail,
      "authorFirstName": ((this.state.first_name === '') ? this.props.info.authorFirstName : this.state.first_name) ,
      "authorProfileUrl": 'http://lorempixel.com/200/400/sports/',
      "authorLastName": ((this.state.last_name === '') ? this.props.info.authorLastName : this.state.last_name),
      "authorRole": ((this.state.role === '') ? this.props.info.authorRole : this.state.role),
      "authorAccess": ((this.state.access === '') ? this.props.info.authorAccess : this.state.access)          
  };

  axios.post(`http://localhost:5000/author/update/${this.props.info._id}`, authorJSON)
      .then(res => {
          console.log(res);
          console.log(res.data);
          this.handleClose()
          window.location.reload()
      })
  }

  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value
    })
}

  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value
    })
}

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
                    defaultValue={this.props.info.authorEmail}
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
                    defaultValue={this.props.info.authorFirstName}

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
                    defaultValue={this.props.info.authorLastName}
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
                    defaultValue={this.props.info.authorRole}

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
                    defaultValue={this.props.info.authorAccess}
                  />
                </Grid>

          </DialogContent>
          <DialogActions style={{justifyContent:'center'}}>
            <Button onClick={this.handleClose} className={classes.cancel}>
              Cancel
          </Button>
            <Button onClick={this.handleSaveClick} className={classes.button}>
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