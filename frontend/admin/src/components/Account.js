import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Profile from './Teammember-profile'; 

const styles = theme => ({

    pic: {
        width: "100%", 
    },


    box: {
        justifyContent: 'space-between'
    },

    container: {
        marginTop: "20px"
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

const author = window.sessionStorage.getItem("currentAuthor") === null? {
    authorBio: "This is the bio being used before session memory becomes available. ",
    authorProfileUrl: "http://lorempixel.com/300/300/",
    authorFirstName: "NullFirstName",
    authorLastName: "NullLastName"
} : window.sessionStorage.getItem("currentAuthor"); 

class Account extends Component{
    constructor(props){
        super(props); 
        this.state = {
            authorBio: author.authorBio,
            authorProfileUrl: author.authorProfileUrl,
            authorName: author.authorFirstName + " " + author.authorLastName,
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
        if(newImg == null){
            return; 
        }
        while(!this.isUriImage(newImg)){
            newImg = prompt("Invalid URL, Please enter again: "); 
        }

        this.setState({
            authorProfileUrl: newImg
        }); 


        
    }

    updateBio= () =>{
        alert("Bio Updated"); 
        this.setState({
            authorBio: this.state.tempBio
        }); 

        
    
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
                    <img alt={this.state.authorFirstName+" " + this.state.authorLastName} className={classes.pic} src={this.state.authorProfileUrl}></img>
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
                                defaultValue={this.state.authorBio}

                            />
                            <Button  onClick={this.updateBio} className={classes.updatePictureButton}>
                                Update Bio
                            </Button>
                        </div>
                    </Grid>

                </Grid>
                <Profile picture={this.state.authorProfileUrl} bio={this.state.auhtorBio}></Profile>

            </Container>

            
        ); 
    }
}

export default withStyles(styles)(Account); 

// Account.defaultProps = {
//     picture: 'https://icon-library.net/images/free-account-icon/free-account-icon-0.jpg',
//     name: 'Author Author',
//     role: 'Chief Editor',
//     bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.",
// }