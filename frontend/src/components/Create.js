import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { height } from '@material-ui/system';
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles'



const styles = theme =>({

    test:{
        borderColour: 'green',
        width: "100%", 
        maxWidth: "1000px",
    },
})

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            URL: '',
            img_alt_text: '',
            img_capt: '',
            teaser: '',
            keywords: [],
            category: '',
            text: '',
            preview: false
        }
    }

    // Dynamically changing the states depending on the field that is being changed 
    handleinput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
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

    render() {
        const {classes} = this.props
        
        return (
            <div >
                <p>CREATE A NEW ARTICLE</p>
                <ThemeProvider theme={this.returnTheme()}>
                <TextField
                    id="title"
                    label="Title"
                    margin="normal"
                    variant="outlined"
                    // style={{width: "100%", maxWidth: "1000px" }}
                    onChange={this.handleinput}
                    className = {classes.test}
                    InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline
                        }
                    }}
                />
                
                <TextField
                    id="URL"
                    label="URL"
                    
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}

                />

                <TextField
                    id="img_alt_text"
                    label="Image alternative text"
                    
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}

                />

                <TextField
                    id="img_caption"
                    label="Image caption"
                    
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}

                />

                <TextField
                    id="teaser"
                    label="Teaser"
                    
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}
                    multiline

                />

                <TextField
                    id="keywords"
                    label="Keywords"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}

                />

                <TextField
                    id="category"
                    label="Category MAKE INTO DROPDOWN"
                    select
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}

                />

                <TextField
                    id="text"
                    label="Text"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '51%' }}
                    onChange={this.handleinput}
                    multiline

                />

                </ThemeProvider>
            </div >
        );
    }
}

export default withStyles(styles)(Create); 