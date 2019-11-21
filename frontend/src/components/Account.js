import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Profile from './Teammember-profile'; 





const styles = theme => ({
    root: {
        width: '100%',
    },


    pic: {
        width: "100%", 
    },

    button: {

        background: '#2E3B55',
        color: 'white',

        '&:hover': {
            background: '#586481',
        },
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
            bio: 'Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.', 
            imgURL: 'http://lorempixel.com/300/300/',
            tempBio: ""
        }
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
        while(!this.isUriImage(newImg)){
            newImg = prompt("Invalid URL, Please enter again: "); 
        }
        this.setState({imgURL: newImg}); 
        
    }

    updateBio= () =>{
        alert("updateBio function called"); 
        alert(this.state.bio);
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
                <Typography gutterBottom variant="h5" component="h2">
                    Customize your profile visible to readers!
                </Typography>
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
                <Profile picture={this.state.imgURL} bio={this.state.bio}></Profile>

            </Container>

            
        ); 
    }
}

export default withStyles(styles)(Account); 

Account.defaultProps = {
    picture: 'http://lorempixel.com/300/300/',
    name: 'Author Author',
    role: 'Chief Editor',
    bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.",
}