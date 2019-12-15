import React, { Component } from 'react';
import Teammember from "./Team-member"; 
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Container } from '@material-ui/core';


const styles = theme => ({
    root: {
        textAlign: "center",
        flexWrap: "wrap",

    },

    container: {
        marginTop: "30px",
        margin: 'auto',


    },
})

class TeamPage extends Component{

    constructor(props) {
        super(props)
        this.state = {
            members: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/author/`)
            .then(response => {
                console.log("didmount", response.data)
                this.setState({
                    members: response.data
                })
            })
            .catch(error => {
                console.log("ERROR in Teammember loading ", error)
            })
    }


    render(){
        const { classes } = this.props; 

        return(
            <div className={classes.root}>
                <Container className={classes.container}>
                <Grid container spacing={1}>
                    {this.state.members.map(member =>
                        // <p>{article.articleText}</p>
                        <Grid item xs={12} sm={12} md={3} key={member.authorId}>
                            <Teammember name={member.authorFirstName + " " + member.authorLastName}
                                role={member.authorRole}
                                bio={member.authorBio}
                                imgURL={member.authorProfileUrl}
                            />
                        </Grid>
                    )}


                </Grid>
            </Container>

            </div>
            





        )




    }




}

export default withStyles(styles)(TeamPage); 