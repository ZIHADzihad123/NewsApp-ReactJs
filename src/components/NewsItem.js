
import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    
    let {title,description,imageUrl,clickUrl} = this.props;
    return (            
      <div>
        <div  className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/14D43/production/_124951358_gettyimages-858367878.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div  className="card-body">
            <h5  className="card-title">{title}...</h5>
            <p  className="card-text">{description}...</p>
            <a href={clickUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">read more</a>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItem