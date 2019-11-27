import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Teammember from "./Team-member"
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


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
        marginBottom: "0"
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
            access: ''
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
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} xl={12}>

                            <TextField
                                id="last_name"
                                label="Last Name"
                                margin="normal"
                                variant="outlined"
                                className={classes.box}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} xl={12}>

                            <TextField
                                id="role"
                                label="Role"
                                margin="normal"
                                variant="outlined"
                                className={classes.box}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} xl={12}>

                            <TextField
                                id="access"
                                label="Access"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>

                    </Grid>

                </ThemeProvider>

                <Button className={classes.create}> Create new Teammember </Button>

                <Grid>
                    <Teammember></Teammember>
                </Grid>



            </div>
        );
    }
}

export default withStyles(styles)(Management);