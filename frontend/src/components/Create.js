import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';

// const useStyles = makeStyles(theme => ({

//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),

//     },
// }));

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
    handleinput = (event) =>{ 
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>CREATE A NEW ARTICLE</p>

                <TextField
                    id="title"
                    label="Title"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '70%' }}
                    onChange = {this.handleinput}
                />

                <TextField
                    id="URL"
                    label="URL"
                    className={this.props.textField}
                    margin="normal"
                    variant="outlined"
                    style={{ width: '70%' }}
                    onChange = {this.handleinput}

                />

                <TextField
                    id="category"
                    label="URL"
                    className={this.props.textField}
                    margin="normal"
                    variant="outlined"
                    style={{ width: '70%' }}
                    onChange = {this.handleinput}

                />

            <TextField
                    id="URL"
                    label="URL"
                    className={this.props.textField}
                    margin="normal"
                    variant="outlined"
                    style={{ width: '70%' }}
                    onChange = {this.handleinput}

                />


            </div >
        );
    }
}

export default Create; 