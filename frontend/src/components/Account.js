import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Profile from './Teammember-profile'; 
import axios from 'axios';





const styles = theme => ({


    pic: {
        width: "100%", 
    },


    box: {
        justifyContent: 'space-between'
    },


    updatePictureButton:{
        marginTop: "10px",
        background: '#2E3B55',
        color: 'white',
        '&:hover': {
            background: '#586481',
        },
    },


})

class Account extends Component{
    constructor(props){
        super(props); 
        this.state = {
            article: "",
            bio: 'Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.', 
            imgURL: 'http://lorempixel.com/300/300/',
            tempBio: ""
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/getByAuthorName/${this.props.name}`)
            .then(response => {

                console.log("didmount", response.data)
                this.setState({
                    article: response.data,

                })
            })
            .catch(error => {
                console.log("ERROR in Category loading ", error)
            })


    }

    //Taken from 
    //http://jsfiddle.net/fMCFB/1/
    isUriImage = (uri) => {

        //make sure we remove any nasty GET params 
        uri = uri.split('?')[0];
        //moving on, split the uri into parts that had dots before them
        var parts = uri.split('.');
        //get the last part ( should be the extension )
        var extension = parts[parts.length-1];
        //define some image types to test against
        var imageTypes = ['jpg','jpeg','tiff','png','gif','bmp'];
        //check if the extension matches anything in the list.
        if(imageTypes.indexOf(extension) !== -1) {
            return true;   
        }
        return false; 
    }


    updatePicture = () =>{
        let newImg = prompt("Please enter image URL: "); 
        if(newImg == null){
            return; 
        }
        while(!this.isUriImage(newImg)){
            newImg = prompt("Invalid URL, Please enter again: "); 
        }
        
        this.setState({imgURL: newImg}); 
        
    }

    updateBio= () =>{
        alert("Bio Updated"); 
        this.setState({bio: this.state.tempBio}) 
    
    }

    handleChange = (event) => {
        this.setState({
            tempBio: event.target.value
        })
        
    }



    render(){
        const {classes} = this.props; 
        return(

            <Container className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={4}>
                    <img alt={this.props.name} className={classes.pic} src={this.state.imgURL}></img>
                    <Button  onClick={this.updatePicture} className={classes.updatePictureButton}>
                                Update Picture
                            </Button>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.updateBio}>
                            <TextField
                                // name="bio"
                                id="Bio"
                                label="Bio"
                                rows='18'
                                variant="outlined"
                                multiline
                                fullWidth
                                onChange={this.handleChange}

                            />
                            <Button  onClick={this.updateBio} className={classes.updatePictureButton}>
                                Update Bio
                            </Button>
                        </div>
                    </Grid>

                </Grid>
                {/* <Profile picture={this.state.imgURL} bio={this.state.bio}></Profile> */}
                <Profile name={this.props.name} bio={this.props.bio} role={this.props.role} picture={this.props.picture}></Profile>

            </Container>

            
        ); 
    }
}

export default withStyles(styles)(Account); 

Account.defaultProps = {
    picture: 'https://icon-library.net/images/free-account-icon/free-account-icon-0.jpg',
    name: 'Abdullah Zameek',
    role: 'Chief Editor',
    bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.",
}