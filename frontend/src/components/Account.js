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



const styles = theme => ({
    card: {
        marginLeft: '5%',
        maxWidth: 345,
		maxHeight: 800,
		margin: "20px",

      },
    media: {
		height: 260,
    },
    button: {
        // marginTop: theme.spacing(5),
        // marginBottom: theme.spacing(2),
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        background: '#2E3B55',
        color: 'white',
        '&:hover': {
            background: '#586481',
        },
    },

    cardActions: {
        justifyContent: 'center'
    },

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

    render(){
        const {classes} = this.props; 
        return(
            <div>

                <Typography gutterBottom variant="h5" component="h2">
                    Customize your profile visible to readers!
                </Typography>
                <Card className={classes.card}>
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



            </div>
        ); 
    }
}

export default withStyles(styles)(Account); 