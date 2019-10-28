import React, {Component} from 'react';

class Article extends Component{
    //constructor(props){
    //  super(props);
    }
  
  
    render (){
      return (
      <div>
          <img alt = "Banner" src={this.props.imgURL} width = "900" height = "600"/>
          <h3>{this.props.title}</h3>
          <p style = "text-align:left;">
              By {this.props.author}
              <span style="float:right;">
                  {this.props.datePublished}
              </span>
          </p>
          <p>{this.props.content}</p>
      </div>
      );
    }
}

Article.defaultProps = {
    title: "Default Title", 
    author: "Someone", 
    datePublised: "12/12/2020",
    content: "Default content",
    imgURL: "ASSETS/defaultBanner.png"
    
}
export default Article;
