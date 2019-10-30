import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Article extends Component{
    constructor(props){
      super(props);
    }


    render (){
      return (
      <div>
          <img alt = "Banner" src={this.props.imgURL} width = "900" height = "600"/>
          <h1>{this.props.title}</h1>
          <h4>By {this.props.author}</h4>
          <h4>{this.props.datePublised}</h4>
          <p>{this.props.content}</p>
      </div>
      );
    }
}

Article.defaultProps = {
    title: "Default Title",
    author: "Someone",
    datePublised: "12/12/2020",
    content: "Default Full Article content",
    imgURL: "ASSETS/defaultBanner.png"

}
export default Article;

