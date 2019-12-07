import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Article from './AdminArticle';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

// import Chip from '@material-ui/core/Chip';
import axios from 'axios';

// const authorName = "Abdullah Zameek" //temp author name added for the sake of it 

const styles = theme => ({

    inputbox: {
        width: "100%",
        maxWidth: "80vw",
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
            keywords: '',
            category: '',
            text: '',
            slug: '',
            preview: false,
            categories: ["None"],
            gottenCatagories: false,
            authorName: 'Abdullah Zameek', //temp author here for now, 
            is_edit_window: (window.location.href.slice(-4) === 'edit')
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
        return <Article title={this.state.is_edit_window ? this.props.location.state.id.info.articleTitle : this.state.title}
            banner={this.state.is_edit_window ? this.props.location.state.id.info.articleImg : this.state.URL}
            teaser={this.state.is_edit_window ? this.props.location.state.id.info.articleTeaser : this.state.teaser}
            body={this.state.is_edit_window ? this.props.location.state.id.info.articleText : this.state.text}
        />
    }

    handleSave = () => {
        alert("Attempting to save");
        let dayDate = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year

        //if edit update 
        if (this.state.is_edit_window) {

            const articleJSON = {
                "articleId": (this.state.slug === "" ? this.props.location.state.id.info.articleId : this.state.slug),
                "articleTitle": (this.state.title === "" ? this.props.location.state.id.info.articleTitle : this.state.title),
                "articleAuthor": "AFTER LOGIN",
                "articleImg": (this.state.URL === "" ? this.props.location.state.id.info.articleImg : this.state.URL),
                "articleImgDesc": (this.state.img_caption === "" ? this.props.location.state.id.info.articleImgDesc : this.state.img_caption),
                "articleTeaser": (this.state.teaser === "" ? this.props.location.state.id.info.articleTeaser : this.state.teaser),
                "articleText": (this.state.text === "" ? this.props.location.state.id.info.articleText : this.state.text),
                "articleCategory": (this.state.category === "" ? this.props.location.state.id.info.articleCategory : this.state.category),
                "articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
                "articleStatus": "unpublished",
                "articleKeywords": (this.state.keywords === "" ? this.props.location.state.id.info.articleKeywords : this.state.keywords)
            };


            axios.post(`http://localhost:5000/article/update/${this.props.location.state.id.info._id}`, articleJSON)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })

        }

        //if create add
        else {
            const articleJSON = {
                "articleId": this.state.slug,
                "articleAuthor": this.state.authorName,
                "articleTitle": this.state.title,
                "articleImg": this.state.URL,
                "articleImgDesc": this.state.img_caption,
                "articleTeaser": this.state.teaser,
                "articleText": this.state.text,
                "articleCategory": this.state.category,
                "articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
                "articleStatus": "unpublished",
                "articleKeywords": this.state.keywords
            };


            axios.post(`http://localhost:5000/article/add`, articleJSON)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }

    }


    allProvided = () => {
        const missing = []
        if (this.state.title === '' && this.location.state.id.info.articleTitle === "")  {
            missing.push('Title')
        }
        if (this.state.URL === '' && this.location.state.id.info.articleImg === "") {
            missing.push('URL')
        }
        if (this.state.img_alt_text === ''&& this.location.state.id.info.articleImgDesc === "") {
            missing.push('Image alternative text')
        }
        if (this.state.slug === ''&& this.location.state.id.info.articleId === "") {
            missing.push('Slug')
        }
        if (this.state.img_caption === ''&& this.location.state.id.info.articleImgDesc === "") {
            missing.push('Image caption')
        }
        if (this.state.teaser === ''&& this.location.state.id.info.articleTeaser === "") {
            missing.push('Teaser')
        }
        if (this.state.category === ''&& this.location.state.id.info.articleCategory === "") {
            missing.push('Category')
        }
        if (this.state.text === ''&& this.location.state.id.info.articleText === "") {
            missing.push('Text')
        }
        if (this.state.keywords === '' && this.location.state.id.info.keywords === "") {
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
            alert("Attempting to send to publish");
            let dayDate = new Date().getDate(); //Current Date
            let month = new Date().getMonth() + 1; //Current Month
            let year = new Date().getFullYear(); //Current Year
            const articleJSON = {
                "articleId": this.state.slug,
                "articleAuthor": this.state.authorName,
                "articleTitle": this.state.title,
                "articleImg": this.state.URL,
                "articleImgDesc": this.state.img_caption,
                "articleTeaser": this.state.teaser,
                "articleText": this.state.text,
                "articleCategory": this.state.category,
                "articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
                "articleStatus": "pending",
                "articleKeywords": this.state.keywords
            };
            console.log(this.state.slug);
            axios.post(`http://localhost:5000/article/add`, articleJSON)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
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
        if (this.state.gottenCatagories === false) {
            this.setState({
                gottenCatagories: true
            })
            axios.get(`http://localhost:5000/category/getAllCategories`)
                .then(response => {
                    //console.log("didmount", response.data)
                    this.setState({
                        categories: response.data
                    })
                })
                .catch(error => {
                    //console.log("ERROR in Category loading ", error)
                })
        }
        return (this.state.categories.map((cat) => { return <MenuItem key={cat} value={cat}>{cat}</MenuItem> }))
    }

    render() {
        const { classes } = this.props
        return (
            <div >
                <h1>CREATE A NEW ARTICLE</h1>
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
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleTitle : ''}
                                />

                                <TextField
                                    id="URL"
                                    label="Image URL"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleImg : ''}

                                />
                                <TextField
                                    id="slug"
                                    label="Slug"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleId : ''}

                                />



                                <TextField
                                    id="img_alt_text"
                                    label="Image alternative text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleText : ''}


                                />

                                <TextField
                                    id="img_caption"
                                    label="Image caption"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleImgDesc : ''}


                                />

                                <TextField
                                    id="teaser"
                                    label="Teaser"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    multiline
                                    className={classes.inputbox}
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleTeaser : ''}


                                />

                                <TextField
                                    id="keywords"
                                    label="Keywords (separate by space)"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    onKeyPress={this.handleKeywords}
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleKeywords : ''}


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
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleCategory : ''}

                                >
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
                                    defaultValue={this.state.is_edit_window ? this.props.location.state.id.info.articleText : ''}

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
