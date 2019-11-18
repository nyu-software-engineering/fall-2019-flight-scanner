import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Article from './Article';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

// import Chip from '@material-ui/core/Chip';

const styles = theme => ({

    inputbox: {
        width: "100%",
        maxWidth: "1000px",
    },
    preview: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#2E3B55',
        color: 'white',
        '&:hover': {
            background: '#586481',
        },
    },
    deleteB: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#93160d',
        color: 'white',
        '&:hover': {
            background: '#ca4b35',
        }


    },
    container: {
        margin: 'auto',
        maxWidth: '1400px'
    },
})

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            URL: '',
            img_alt_text: '',
            img_caption: '',
            teaser: '',
            keywords: [],
            category: '',
            text: '',
            preview: false
        }
    }

    // Dynamically changing the states depending on the field that is being changed 
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleKeywords = (event) => {
        console.log('new enter', event.target.value)
        //getting the list of inputs 
        const list = event.target.value.split(" ")
        //filtering out the spaces from the list
        const processed = list.filter((value) => {
            return value !== ""
        })
        console.log(processed)

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
        if (this.state.preview) {
            return "UNLOAD PREVIEW"
        }
        else { return 'LOAD PREVIEW' }
    }

    handlePreviewLoad = () => {
        this.setState(prevState => ({
            preview: !prevState.preview
        }))
    }

    showPreview = () => {
        // if (this.state.preview) {
        //     return <Article title={this.state.title}
        //                     banner={this.state.URL}  
        //                     teaser={this.state.teaser}    
        //                     body={this.state.text} 
        //                     ></Article>
        // }
        return <Article title={this.state.title}
            banner={this.state.URL}
            teaser={this.state.teaser}
            body={this.state.text}
        ></Article>
    }

    handleSave = () => {
        alert("Attempting to save")
    }

    allProvided = () => {
        const missing = []
        if (this.state.title === '') {
            missing.push('Title')
        }
        if (this.state.URL === '') {
            missing.push('URL')
        }
        if (this.state.img_alt_text === '') {
            missing.push('Image alternative text')
        }
        if (this.state.img_caption === '') {
            missing.push('Image caption')
        }
        if (this.state.teaser === '') {
            missing.push('Teaser')
        }
        if (this.state.category === '') {
            missing.push('Category')
        }
        if (this.state.text === '') {
            missing.push('Text')
        }
        if ((this.state.keywords).length === 0) {
            missing.push("Keywords")
        }
        if (missing.length !== 0) {
            var string = ''
            var i
            for (i = 0; i < missing.length; i++) {
                string = string + ' ' + missing[i]
            }
            alert(`Please provide correct information in the following fields: ${string}`)
        }
        else {
            return true
        }

    }

    handleSendToPublish = () => {
        if (this.allProvided()) {
            alert("Attempting to send to publish")
        }

    }

    handleDelete = () => {
        const answer = prompt("Are you sure you want to delete your article?\nTypes yes to confirm or cancel ")
        if (answer) {
            if (answer.toUpperCase() === 'YES') {
                alert("DELETE THE RECORD FROM DB")
            }
        }
    }

    getMenu = () => {
        // call the database
        const categories = ['ONE', 'TWO', 'THREE']
        return (categories.map((cat) => { return <MenuItem key={cat} value={cat}>{cat}</MenuItem> }))
    }

    render() {
        const { classes } = this.props
        return (
            <div >
                <p>CREATE A NEW ARTICLE</p>
                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={5}>
                            <ThemeProvider theme={this.returnTheme()}>
                                <TextField
                                    id="title"
                                    label="Title"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                />

                                <TextField
                                    id="URL"
                                    label="URL"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}

                                />

                                <TextField
                                    id="img_alt_text"
                                    label="Image alternative text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}

                                />

                                <TextField
                                    id="img_caption"
                                    label="Image caption"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}

                                />

                                <TextField
                                    id="teaser"
                                    label="Teaser"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    multiline
                                    className={classes.inputbox}

                                />

                                <TextField
                                    id="keywords"
                                    label="Keywords (separate by space)"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    onKeyPress={this.handleKeywords}

                                > </TextField>

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
                                    {/* <MenuItem value='One' >One</MenuItem>
                        <MenuItem value='Two' >Two</MenuItem> */}
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.getMenu()}
                                </TextField>

                                <TextField
                                    id="text"
                                    label="Text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    multiline
                                    className={classes.inputbox}
                                />
                            </ThemeProvider>
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <div>
                                {/* <Button className={classes.preview} onClick={this.handlePreviewLoad}>{this.handleload()}</Button> */}
                                {this.showPreview()}
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                <div>
                    <Button onClick={this.handleSave} className={classes.preview}>
                        SAVE
                        </Button>
                    <Button onClick={this.handleSendToPublish} className={classes.preview}>
                        SEND TO PUBLISHING
                        </Button>
                </div>
                <div><Button onClick={this.handleDelete} className={classes.deleteB}> DELETE</Button></div>


            </div >
        );
    }
}

export default withStyles(styles)(Create); 