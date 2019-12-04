import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Teammember from "./AdminTeammember"
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import EditDialog from './Dialog'


const styles = theme => ({

    create: {
        margin: "3%",
        background: '#2E3B55',
        color: 'white',
        '&:hover': {
            background: '#586481',
        }
    },

    box: {
        marginBottom: "0",
        width: "40%",
        minWidth: "250px",

    }

});

class Management extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gmail: '',
            first_name: '',
            last_name: '',
            role: '',
            access: '',
            members: [],
            dialog_gmail: '',
            dialog_first_name: '',
            dialog_last_name: '',
            dialog_role: '',
            dialog_access: '',
            dialog_open:false,
        }
    }

    returnTheme = () => {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#2E3B55',
                },
            },
        });
        return theme
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleCreate = () => {
        if (this.isGmail() & this.allFilled()) {
            alert("ADD DAT DUDE")
        }
        else {
            alert("Please provide correct information!")
        }

    }

    //helper functions 

    isGmail = () => {
        //const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if (this.state.gmail.includes('@gmail.com')) {
            return true
        }
        else {
            return false
        }
    }

    allFilled = () => {
        if (this.state.first_name === "" || this.state.last_name === "" || this.state.role === '' || this.state.access === "") {
            return false
        }
        else {
            return true
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:5000/author/`)
            .then(response => {
                console.log("didmount", response.data)
                this.setState({
                    members: response.data
                })
            })
            .catch(error => {
                console.log("ERROR in Teammember loading ", error)
            })
    }

    showTeam = () => {
        return <Grid container spacing={0}>
            {this.state.members.map((member) => { return <Grid item xs={6} sm={3}><Teammember email={member.email} firstName={member.authorFirstName} lastName={member.authorLastName} role={member.authorRole} id={member._id} pressEdit={this.pressEdit} /> </Grid> })}
        </Grid>
    }

    pressEdit = (email, first, last, role, access) => {
            this.setState({
                dialog_gmail: email,
                dialog_first_name: first,
                dialog_last_name: last,
                dialog_role: role,
                dialog_access: access,
                dialog_open:true,
            })
    }

    pressClose = () =>{
        this.setState({
            dialog_open:false
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div>

                <ThemeProvider theme={this.returnTheme()}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} xl={12}>
                            <TextField
                                id="gmail"
                                label="Gmail"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                                className={classes.box}
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
                            />
                        </Grid>

                    </Grid>

                </ThemeProvider>

                <Button className={classes.create} onClick={this.handleCreate}> Create new Teammember </Button>
                <Grid container spacing={2}>
                    {this.showTeam()}
                </Grid>

                <EditDialog open={this.state.dialog_open} close={this.pressClose} gmail={this.state.dialog_gmail} firstName={this.state.dialog_first_name} lastName={this.state.dialog_last_name} role={this.state.dialog_role} access={this.state.dialog_role}></EditDialog>



            </div>
        );
    }
}

export default withStyles(styles)(Management);