import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import ImageUploader from 'react-images-upload';





const styles = theme => ({
    root: {
        width: '100%',
    },

    cardPic: {
        marginLeft: '5%',
        width: '20%',
		height: '370px',
        margin: "20px",
        boxShadow: "none"

      },
    cardBio: {
        width: '60%',
        height: '370px',
        marginRight: '5%',
        marginTop: '20px', 
        boxShadow: "none"
    },

    button: {

        background: '#2E3B55',
        color: 'white',

        '&:hover': {
            background: '#586481',
        },
    },

    cardActions: {
        justifyContent: 'center',

    },

    box: {
        justifyContent: 'space-between'
    },

    inputbox: {
        width: '90%',
        height: '270px',

        marginTop: '20px'
    },

    bioActionArea:{
        height: '100px'
    },

    cardActionArea: {
        maxHeight: "300px",
        minHeight: "300px"
    },
    updatePictureButton:{

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
            bio: '', 
            imgURL: '',
            pictures: [],
            onDrop:  this.onDrop.bind(this)
        }
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    updatePicture = () =>{
        alert("updatePicture function called"); 
    }

    updateBio= () =>{
        alert("updateBio function called"); 
        alert(this.state.bio); 
    }

    handleChange = (event) => {
        this.setState({
            bio: event.target.value
        })
        
    }



    render(){
        const {classes} = this.props; 
        return(
            <div class="flex-container" className={classes.root}>
                
                <Typography gutterBottom variant="h5" component="h2">
                    Customize your profile visible to readers!
                </Typography>

                <Box display='flex' p={1} className={classes.box}>
                <Card className={classes.cardPic}>
                <CardActionArea className={classes.cardActionArea}>
                    <CardMedia
                    component="img"
                    alt="Admin Profile Picture"
                    image="./ASSETS/default_profile.png"
                    title="Admin Profile Picutre"
                    />
                </CardActionArea>

                </Card>


                <Card className={classes.cardBio}>
                <CardActionArea >
                <TextField
                    id="Bio"
                    label="Bio"
                    rows='11'
                    variant="outlined"
                    multiline
                    onChange={this.handleChange}
                    className={classes.inputbox}

                />

                </CardActionArea>
                <CardActions className={classes.cardActions}>

                    <Button  onClick={this.updateBio} className={classes.updatePictureButton}>
                    Update Bio
                    </Button>

                </CardActions>
                </Card>
                </Box>

                <ImageUploader
                withIcon={false}
                withLabel={false}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>

            
        ); 
    }
}

export default withStyles(styles)(Account); 