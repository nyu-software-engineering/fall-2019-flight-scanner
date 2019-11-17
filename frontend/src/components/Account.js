import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';



const styles = theme => ({
    root: {
        width: '100%',
    },

    cardPic: {
        marginLeft: '5%',
        width: '20%',
		height: '40%',
		margin: "20px",

      },
    cardBio: {
        width: '60%',
        height: '370px',
        marginRight: '5%',
        marginTop: '20px'
    },
    // media: {
	// 	height: '270px',
    // },
    button: {
        // marginTop: theme.spacing(3),
        // marginBottom: theme.spacing(1),
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
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

    nameAndRole: {
        marginTop: theme.spacing(1),
    },

    bioText: {
        maxHeight: '300px'
    }



    // preview: {
    //     marginTop: theme.spacing(5),
    //     marginBottom: theme.spacing(2),
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(1),
    //     background: '#2E3B55',
    //     color: 'white',
    //     '&:hover': {
    //         background: '#586481',
    //     },
    // },
    // deleteB: {
    //     marginTop: theme.spacing(5),
    //     marginBottom: theme.spacing(2),
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(1),
    //     background: '#93160d',
    //     color: 'white',
    //     '&:hover': {
    //         background: '#ca4b35',
    //     }


    // },
})

class Account extends Component{
    // constructor(props){
    //     super(props); 
    // }

    updatePicture = () =>{
        alert("updatePicture function called"); 
    }

    updateBio= () =>{
        alert("updateBio function called"); 
    }

    showPreviews= () => {
        alert("showPreviews function called")
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
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Admin Profile Picture"
                    image="./ASSETS/default_profile.png"
                    title="Admin Profile Picutre"
                    />

                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Button onClick={this.updatePicture} className={classes.button}>
                    Update Picture
                    </Button>

                </CardActions>
                </Card>

                <Card className={classes.cardBio}>
                <CardActionArea >
                <TextField
                    id="Bio"
                    label="Bio"
                    rows='11'
                    variant="outlined"
                    multiline
                    
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



                <Box display='flex' p={1} className={classes.box}>
                <Card className={classes.cardPic}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Admin Profile Picture"
                    image="./ASSETS/default_profile.png"
                    title="Admin Profile Picutre"
                    />

                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.nameAndRole}>
                    Author Name
                    <br/>
                    Author Role
                </Typography>

                </CardActions>
                </Card>

                <Card className={classes.cardBio}>
                <CardActionArea className = {classes.cardActionArea}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.bioText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus dui quis sapien lacinia eleifend. Nulla ullamcorper magna a massa ornare fringilla. Nunc ut tortor non purus sollicitudin vehicula ac non sapien. Ut nunc risus, eleifend non tortor non, auctor sagittis turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed faucibus purus et enim facilisis, vel congue justo venenatis. Proin egestas, purus in ultricies tincidunt, orci mi feugiat leo, id pharetra elit erat sed nisi. Donec ipsum est, lobortis quis tortor at, facilisis euismod risus. Praesent pretium mauris ut neque tempor interdum. Nullam imperdiet ex sed facilisis fringilla.
                </Typography>

                </CardActionArea>
                <CardActions className={classes.cardActions}>

                   <Button  onClick={this.updateBio} className={classes.updatePictureButton}>
                    Update Bio
                    </Button> 

                </CardActions>
                </Card>
                </Box>
                <Button  onClick={this.showPreviews} className={classes.updatePictureButton}>
                    Show Previews
                </Button> 
            </div>
        ); 
    }
}

export default withStyles(styles)(Account); 