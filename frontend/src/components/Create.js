import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import Article from './Article';


const styles = theme => ({

    inputbox: {
        width: "100%",
        maxWidth: "1000px",
    },
    preview: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        background: '#2E3B55', 
        color: 'white',
    },
    '&:hover': {
        backgroundColor: '#2E3B55',
        borderColor: '#2E3B55',
        boxShadow: 'none',
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
            category: 'Category',
            text: '',
            preview: false
        }
    }

    // Dynamically changing the states depending on the field that is being changed 
    handChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log('elo', event.target.value)
    }

    handleCategory = (event) => {
        this.setState({
            category: event.target.value
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

    handleload = () => {
        if (this.state.preview){
            return "UNLOAD PREVIEW"
        }
        else {return 'LOAD PREVIEW'}
    }

    handlePreviewLoad = () => {
        this.setState(prevState => ({
            preview: !prevState.preview
        }))
    }

    showpreview = () => {
        if (this.state.preview){
            return <Article></Article>
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div >
                <p>CREATE A NEW ARTICLE</p>
                <ThemeProvider theme={this.returnTheme()}>
                    <TextField
                        id="title"
                        label="Title"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        className={classes.inputbox}
                    />

                    <TextField
                        id="URL"
                        label="URL"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        className={classes.inputbox}

                    />

                    <TextField
                        id="img_alt_text"
                        label="Image alternative text"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        className={classes.inputbox}

                    />

                    <TextField
                        id="img_caption"
                        label="Image caption"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        className={classes.inputbox}

                    />

                    <TextField
                        id="teaser"
                        label="Teaser"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        multiline
                        className={classes.inputbox}

                    />

                    <TextField
                        id="keywords"
                        label="Keywords"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        className={classes.inputbox}

                    />

                    <TextField
                        id="category"
                        label='Category'
                        select
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleCategory}
                        value={this.state.category}
                        className={classes.inputbox}
                    >
                        <MenuItem value='One' >One</MenuItem>
                        <MenuItem value='Two' >Two</MenuItem>
                    </TextField>
                    
                    <TextField
                        id="text"
                        label="Text"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleinput}
                        multiline
                        className={classes.inputbox}

                    />

                    <div>
                    <Button className={classes.preview} onClick={this.handlePreviewLoad}>{this.handleload()}</Button>
                    {this.showpreview()}

                    </div>

                </ThemeProvider>
            </div >
        );
    }
}

export default withStyles(styles)(Create); 