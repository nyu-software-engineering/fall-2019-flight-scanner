import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Article from './AdminArticle';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


import axios from 'axios';

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
        marginTop: theme.spacing(3),
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
            sessionVar: JSON.parse(sessionStorage.getItem("user")),
            title: ' ',
            URL: ' ',
            img_caption: ' ',
            teaser: ' ',
            keywords: ' ',
            category: ' ',
            text: ' ',
            slug: ' ',
            preview: false,
            categories: ["None"],
            gottenCatagories: false,

            is_edit_window: (window.location.href.slice(-4) === 'edit'),
            is_admin_window: (window.location.href.slice(-7) === 'approve'),
            // redirect: false
        }
    }

    // Dynamically changing the states depending on the field that is being changed 
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
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
        console.log(this.state.is_edit_window, "<")
        if (this.state.is_edit_window || this.state.is_admin_window) {
            return <Article title={this.state.title === " " ? this.showDefault().articleTitle : this.state.title}
                banner={this.state.URL === " " ? this.showDefault().articleImg : this.state.URL}
                teaser={this.state.teaser === " " ? this.showDefault().articleTeaser : this.state.teaser}
                body={this.state.text === " " ? this.showDefault().articleText : this.state.text}
                author={this.showDefault().articleAuthor}
            />
        }
        else {
            return <Article title={this.state.title}
                banner={this.state.URL}
                teaser={this.state.teaser}
                body={this.state.text}
            />
        }
    }

    handleSave = () => {
        let dayDate = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year

        //if edit update 
        if (this.state.is_edit_window) {

            let articleJSON = {
                "articleId": (this.state.slug === " " ? this.props.location.state.id.info.articleId : this.state.slug),
                "articleTitle": (this.state.title === " " ? this.props.location.state.id.info.articleTitle : this.state.title),
                "articleAuthor": this.state.sessionVar.authorFirstName + " " + this.state.sessionVar.authorLastName,
                "articleImg": (this.state.URL === " " ? this.props.location.state.id.info.articleImg : this.state.URL),
                "articleImgDesc": (this.state.img_caption === " " ? this.props.location.state.id.info.articleImgDesc : this.state.img_caption),
                "articleTeaser": (this.state.teaser === " " ? this.props.location.state.id.info.articleTeaser : this.state.teaser),
                "articleText": (this.state.text === " " ? this.props.location.state.id.info.articleText : this.state.text),
                "articleCategory": (this.state.category === " " ? this.props.location.state.id.info.articleCategory : this.state.category),
                "articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
                "articleStatus": "unpublished",
                "articleKeywords": (this.state.keywords === " " ? this.props.location.state.id.info.articleKeywords : this.state.keywords)
            };


            axios.post(`http://localhost:5000/article/update/${this.props.location.state.id.info._id}`, articleJSON)
            // .then(res => {
            //     console.log(res);
            //     console.log(res.data);

            // })

        }
        else if (this.state.is_admin_window) {
            let articleJSON = {
                "articleId": (this.state.slug === " " ? this.props.info.articleId : this.state.slug),
                "articleTitle": (this.state.title === " " ? this.props.info.articleTitle : this.state.title),
                "articleAuthor": this.state.sessionVar.authorFirstName + " " + this.state.sessionVar.authorLastName,
                "articleImg": (this.state.URL === " " ? this.props.info.articleImg : this.state.URL),
                "articleImgDesc": (this.state.img_caption === " " ? this.props.info.articleImgDesc : this.state.img_caption),
                "articleTeaser": (this.state.teaser === " " ? this.props.info.articleTeaser : this.state.teaser),
                "articleText": (this.state.text === " " ? this.props.info.articleText : this.state.text),
                "articleCategory": (this.state.category === " " ? this.props.info.articleCategory : this.state.category),
                "articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
                "articleStatus": "pendingreview",
                "articleKeywords": (this.state.keywords === " " ? this.props.info.articleKeywords : this.state.keywords)
            };


            axios.post(`http://localhost:5000/article/update/${this.props.info._id}`, articleJSON)
            alert("Changes saved! ");
        }

        //if create add
        else {
            let articleJSON = {
                "articleId": this.state.slug,
                "articleAuthor": this.state.sessionVar.authorFirstName + " " + this.state.sessionVar.authorLastName,
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

            console.log("article json", articleJSON)

            axios.post(`http://localhost:5000/article/add`, articleJSON)

        }

        // this.setState({
        //     redirect: true
        // })
        this.props.history.push("/refresh/my-articles")

    }


    allProvided = () => {
        const missing = []
        if (this.state.title === ' ' && this.props.location.state.id.info.articleTitle === " ") {
            missing.push('Title')
        }
        if (this.state.URL === ' ' && this.props.location.state.id.info.articleImg === " ") {
            missing.push('URL')
        }
        if (this.state.slug === ' ' && this.props.location.state.id.info.articleId === " ") {
            missing.push('Slug')
        }
        if (this.state.img_caption === ' ' && this.props.location.state.id.info.articleImgDesc === " ") {
            missing.push('Image caption')
        }
        if (this.state.teaser === ' ' && this.props.location.state.id.info.articleTeaser === " ") {
            missing.push('Teaser')
        }
        if (this.state.category === ' ' && this.props.location.state.id.info.articleCategory === " ") {
            missing.push('Category')
        }
        if (this.state.text === ' ' && this.props.location.state.id.info.articleText === " ") {
            missing.push('Text')
        }
        if (this.state.keywords === ' ' && this.props.location.state.id.info.keywords === " ") {
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
            let dayDate = new Date().getDate(); //Current Date
            let month = new Date().getMonth() + 1; //Current Month
            let year = new Date().getFullYear(); //Current Year

            let articleJSON = {
                "articleId": (this.state.slug === " " ? this.props.location.state.id.info.articleId : this.state.slug),
                "articleTitle": (this.state.title === " " ? this.props.location.state.id.info.articleTitle : this.state.title),
                "articleAuthor": this.state.sessionVar.authorFirstName + " " + this.state.sessionVar.authorLastName,
                "articleImg": (this.state.URL === " " ? this.props.location.state.id.info.articleImg : this.state.URL),
                "articleImgDesc": (this.state.img_caption === " " ? this.props.location.state.id.info.articleImgDesc : this.state.img_caption),
                "articleTeaser": (this.state.teaser === " " ? this.props.location.state.id.info.articleTeaser : this.state.teaser),
                "articleText": (this.state.text === " " ? this.props.location.state.id.info.articleText : this.state.text),
                "articleCategory": (this.state.category === " " ? this.props.location.state.id.info.articleCategory : this.state.category),
                "articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
                "articleStatus": "pendingreview",
                "articleKeywords": (this.state.keywords === " " ? this.props.location.state.id.info.articleKeywords : this.state.keywords)
            };

            if (this.state.is_edit_window) {
                axios.post(`http://localhost:5000/article/update/${this.props.location.state.id.info._id}`, articleJSON)
                // .then(res => {
                //     console.log(res);
                //     console.log(res.data);
                // })
            }
            else {
                axios.post(`http://localhost:5000/article/add`, articleJSON)
                // .then(res => {
                //     console.log(res);
                //     console.log(res.data);
                // })
            }

            // this.setState({
            //     redirect: true
            // })

            this.props.history.push("/refresh/my-articles")

        }
    }

    handleDelete = () => {
        const answer = prompt("Are you sure you want to delete your article?\nTypes yes to confirm or cancel ")
        if (answer) {
            if (answer.toUpperCase() === 'YES') {
                axios.delete(`http://localhost:5000/article/${this.props.location.state.id.info._id}`)
                    .then(
                        // this.setState({
                        //     redirect: true
                        // })
                        this.props.history.push("/refresh/my-articles")
                    )


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

    getDeleteButton = (classes) => {
        return <Button className={classes.deleteB} onClick={this.handleDelete}> DELETE</Button>

    }

    getSaveButton = (classes) => {
        return <Button onClick={this.handleSave} className={classes.preview}> SAVE </Button>

    }

    getPublishButton = (classes) => {
        return <Button onClick={this.handleSendToPublish} className={classes.preview}> SEND TO PUBLISHING </Button>
    }


    showButtons = (classes) => {

        //accessing from progressbar -> only need save button 
        if (this.state.is_admin_window) {
            return <div>
                {this.getSaveButton(classes)}
            </div>


        }
        //accessing from edit -> need all the three buttons 
        else if (this.state.is_edit_window) {

            return <div>
                {this.getSaveButton(classes)}
                {this.getPublishButton(classes)}
                <br />
                {this.getDeleteButton(classes)}
            </div>

        }

        //accessing from create -> everything apart from delete 
        else {
            return <div>
                {this.getSaveButton(classes)}
                {this.getPublishButton(classes)}
            </div>

        }
    }

    showDefault = () => {
        if (this.state.is_edit_window) {
            return this.props.location.state.id.info;
        }
        else if (this.state.is_admin_window) {
            return this.props.info;
        }

    }

    showTitle = () => {
        if (this.state.is_edit_window || this.state.is_admin_window) {
            return ""
        }
        else {
            return <Typography variant='h5' style={{ textTransform: 'uppercase', marginBottom: '3%', marginTop: '4%' }}> Create a new article </Typography>
        }
    }

    render() {
        const { classes } = this.props
        // if (this.state.redirect && (!this.state.is_admin_window)) {
        //     return (<Redirect to={`/my-articles`} />)
        // }
        return (
            <div >
                {this.showTitle()}
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
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleTitle : ''}
                                />

                                <TextField
                                    id="URL"
                                    label="Image URL"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleImg : ''}
                                />
                                <TextField
                                    id="slug"
                                    label="Slug"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleId : ''}
                                />

                                <TextField
                                    id="img_caption"
                                    label="Image caption"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleImgDesc : ''}
                                />

                                <TextField
                                    id="teaser"
                                    label="Teaser"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    multiline
                                    className={classes.inputbox}
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleTeaser : ''}
                                />

                                <TextField
                                    id="keywords"
                                    label="Keywords (separate by space)"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    className={classes.inputbox}
                                    onKeyPress={this.handleKeywords}
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleKeywords : ''}
                                > </TextField>

                                <TextField
                                    id="category"
                                    label='Category'
                                    select
                                    margin="normal"
                                    variant="outlined"
                                    drp_selectedValue=''
                                    onChange={this.handleCategory}
                                    value={this.state.category}
                                    className={classes.inputbox}
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleCategory : ''}
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
                                    defaultValue={(this.state.is_edit_window || this.state.is_admin_window) ? this.showDefault().articleText : ''}
                                />
                            </ThemeProvider>
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <div>
                                {this.showPreview()}
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                {this.showButtons(classes)}

            </div >
        );
    }
}

export default withRouter(withStyles(styles)(Create)); 
