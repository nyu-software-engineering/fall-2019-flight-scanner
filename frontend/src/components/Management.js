import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Teammember from "./Team-member"
import Grid from '@material-ui/core/Grid';


class Management extends Component {
    // constructor(props) {
    //     super(props)
    // }

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

    render() {
        return (
            <div>

                <ThemeProvider theme={this.returnTheme()}>
                <Grid>
                <TextField
                        id="gmail"
                        label="Gmail"
                        margin="normal"
                        variant="outlined"
                    />
                <TextField
                        id="first_name"
                        label="First Name"
                        margin="normal"
                        variant="outlined"
                    />
                <TextField
                        id="last_name"
                        label="Last Name"
                        margin="normal"
                        variant="outlined"
                    />
                <TextField
                        id="role"
                        label="Role"
                        margin="normal"
                        variant="outlined"
                    />
                <TextField
                        id="title"
                        label="ame"
                        margin="normal"
                        variant="outlined"
                    />
                
                </Grid>
                
                </ThemeProvider>

                <Button> Create </Button>

                <Grid>
                    <Teammember></Teammember>
                </Grid>
                    

                
            </div>
        );
    }
}

export default Management;