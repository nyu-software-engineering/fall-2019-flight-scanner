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


class Account extends Component{
    constructor(props){
        super(props); 
        this.state = {
            sessionVar: JSON.parse(sessionStorage.getItem("user")),
            author: "",
            authorProfileUrl: "",
            tempBio: "",
            // reloaded: false
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/author/${this.state.sessionVar._id}`)
        .then(response => {

            console.log("didmount", response.data)
            this.setState({
                author: response.data,

            });

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

        let authorJSON = {
            "authorBio": this.state.author.authorBio,
            "authorEmail": this.state.author.authorEmail,
            "authorFirstName": this.state.author.authorFirstName ,
            "authorProfileUrl": newImg,
            "authorLastName": this.state.author.authorLastName,
            "authorRole": this.state.author.authorRole,
            "authorAccess": this.state.author.authorAccess          
        };

      
        axios.post(`http://localhost:5000/author/update/${this.state.sessionVar._id}`, authorJSON)
            .then(res => {
                console.log(res);
                console.log(res.data);
                // this.handleClose()
                window.location.reload()
            })
        
        this.setState({
            author: authorJSON
        });
        
    }

    updateBio= () =>{
        alert("Bio Updated"); 

        let authorJSON = {
            "authorBio": this.state.tempBio,
            "authorEmail": this.state.author.authorEmail,
            "authorFirstName": this.state.author.authorFirstName ,
            "authorProfileUrl": this.state.author.authorProfileUrl,
            "authorLastName": this.state.author.authorLastName,
            "authorRole": this.state.author.authorRole,
            "authorAccess": this.state.author.authorAccess          
        };

        axios.post(`http://localhost:5000/author/update/${this.state.sessionVar._id}`, authorJSON)
            .then(res => {
                console.log(res);
                console.log(res.data);
                // this.handleClose()
                window.location.reload()
            })
        
        this.setState({
            author: authorJSON
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
                    <img alt={this.state.author.authorFirstName+" " + this.state.author.authorLastName} className={classes.pic} src={this.state.author.authorProfileUrl}></img>
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
                                defaultValue={this.state.author.authorBio}

                            />
                            <Button  onClick={this.updateBio} className={classes.updatePictureButton}>
                                Update Bio
                            </Button>
                        </div>
                    </Grid>

                </Grid>
                <Profile></Profile>

            </Container>

            
        ); 
    }
}

export default withStyles(styles)(Account); 
