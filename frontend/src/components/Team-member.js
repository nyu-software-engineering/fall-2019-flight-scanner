import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {Redirect} from 'react-router-dom';
// import Link from '@material-ui/core/Link';

// const useStyles = makeStyles({
// 	card: {
// 	  maxWidth: 345,
// 	},
// 	media: {
// 	  height: 140,
// 	},
//   });

const styles = theme => ({
	card: {
		maxWidth: 345,
		maxHeight: 800,
		margin: "20px"


	},
	media: {
		height: 260,
	},
});

class Teammember extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         redirect: false
    //     }
	// }
	
	redirect = () =>{
		this.setState({
			redirect: true
		}); 
	}
	
	render(){
		const { classes } = this.props
		// if (this.state.redirect ) {
        //     // window.location.reload()
        //     return (<Redirect to={{pathname: '/Account', state: {name: this.props.name, role: this.props.role, bio: this.props.bio, imgURL: this.props.imgURL}}} />)
            
		// }
	
		return (


			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={this.props.imgURL}
						title={this.props.name} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{this.props.name}
						</Typography>
						<Typography gutterBottom variant="h6" component="h6">
							{this.props.role}
						</Typography>
						{/* <Typography variant="body2" color="textSecondary" component="p">
						{props.bio}
					</Typography> */}
					</CardContent>
				</CardActionArea>
				<CardActions>
					{/* <Link> */}
						<Button onClick={this.redirect} size="small" color="primary">
							Learn More
						</Button>
					{/* </Link> */}
					
					
					
				</CardActions>
			</Card>
		);
	}
}




Teammember.defaultProps = {
	name: "Anonymous User",
	role: "Classified Role",
	bio: "A very private person. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia odio quis magna dictum sodales. Sed ac nibh orci. In eu libero ornare, iaculis nunc id, mattis orci. Etiam nibh eros, ornare sit amet massa ac, facilisis scelerisque elit. Aliquam venenatis porta neque, eget egestas elit iaculis quis. Etiam augue tortor, ultrices a porta et, ornare non lacus. Etiam vehicula bibendum blandit. Etiam ac erat vitae mauris rutrum iaculis. Mauris vehicula eget lectus vitae efficitur. Nulla ornare vitae est et tincidunt.Phasellus id mauris nibh. Pellentesque vitae nunc massa. Etiam tincidunt mattis ultricies. Etiam suscipit lacus augue, ut pellentesque nisl dapibus et. Nam ullamcorper orci id hendrerit ultrices. Mauris semper est nec ipsum bibendum, rhoncus ultrices velit bibendum. Donec at lobortis magna. Mauris at nibh nibh. Cras sit amet tempor est. Sed euismod id nunc non consequat. Proin blandit ipsum metus, nec fermentum leo luctus sit amet. Nulla ligula purus, rhoncus eu libero ut, pharetra posuere elit. Aenean vel mollis arcu. Ut nec lacinia metus. Praesent volutpat mattis tellus sit amet scelerisque.Phasellus at scelerisque mi, id ultricies purus. Maecenas in mollis leo. Etiam massa dui, ultrices vitae mattis sed, sagittis blandit libero. Phasellus bibendum mauris id ex egestas, eget iaculis justo lobortis. Aliquam iaculis eros eu leo mollis, sit amet lacinia lacus mollis. Pellentesque sit amet egestas odio, eu cursus sapien. Cras eu velit quam. Donec ac nibh vel nisl mattis malesuada. Duis vel dapibus nisl, luctus varius magna. In porttitor elit purus, eu porta nulla suscipit ut. Sed elementum libero eu arcu blandit, ac bibendum lacus vestibulum.",
	imgURL: "./ASSETS/default_profile.png"


}


export default withStyles(styles)(Teammember);