import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';


const styles = theme => ({
    card: {
        maxWidth: 345,
        maxHeight: 800,
        margin: "20px",

    },
    media: {
        height: 260,
    },
    delete: {
        color: 'red',
        '&:hover': {
            background: 'red',
            color: 'white'
        },
        margin: '0'

    },
    button: {
        color: '#2E3B55',
        '&:hover': {
            background: '#2E3B55',
            color: 'white'
        }
    }
});

class Teammember extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleEditClick = () => {
        console.log(this.props.firstName)
        this.props.pressEdit(this.props.info)
    }

    handleDelete = () => {
        console.log(this.props.firstName)
        axios.delete(`http://localhost:5000/author/${this.props.info._id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    

    render() {
        const { classes } = this.props
        return (

            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={this.props.info.authorProfileURL}
                        title={this.props.info.authorFirstName} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.info.authorFirstName + " " + this.props.info.authorLastName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                            {this.props.info.authorRole}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid>
                        <Button size="small" className={classes.button}  >
                            See Profile
				</Button>
                        <Button size="small" className={classes.delete} onClick={this.handleDelete} >
                            Delete
                </Button>
                        <Button size="small" className={classes.button} onClick={this.handleEditClick}>
                            Edit
                </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(Teammember);


Teammember.defaultProps = {
    info: {
        authorBio: "CS Major",
        authorEmail: "arz268@nyu.edu",
        authorFirstName: "Abdullah",
        authorId: "Auth001",
        authorLastName: "Zameek",
        authorProfileUrl: "lorempixel.com/400/200",
        authorRole: "Editor",
        createdAt: "2019-12-01T22:50:57.090Z",
        updatedAt: "2019-12-01T22:50:57.090Z",
        __v: 0,
        _id: "5de443d1a3ca300a85e34bc9",
    }

}

