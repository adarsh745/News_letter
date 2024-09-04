import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let{title,description,imgUrl,newsUrl,date,author,sorce}=this.props;
    return (
      <div className="my-3">
       <div  className="card" >
       <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'100'}}> {sorce}</span>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div  className="card-body">
                <h5  className="card-title">{title}...</h5>
                <p  className="card-text">{description}.... </p>
                <p className="card-text"><small className='text-muted'>By  {author}  on {date}</small></p>
                <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-dark btn-primary">Read</a>
                
            </div>
      </div>
      </div>
    )
  }
}

export default Newsitem
