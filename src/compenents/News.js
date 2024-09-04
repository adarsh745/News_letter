import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import { matchPath } from 'react-router-dom';
import PropTypes from 'prop-types'

export class News extends Component {
        static defaultProps=
        {
            country:'in',
            pageSize:8,
            category:'general',
        }
        static propTypes=
        {
            country:PropTypes.string,
            pageSize:PropTypes.number,
            category:PropTypes.string,

        }
        // login=()=>
        //     {
        //       console.log("this is login page")
        //     } 

    constructor()
    {
         super();
        this.state={
                articles:[],
                 loading:false,
                page:1}
    } 
      
        async componentDidMount(){
                try{ 
                    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c5d17adecfe44195b8f276d7bf73a574&pageSize=${this.props.pageSize}`     
                    const res = await fetch(url);
                    const data = await res.json();
                    console.log(data)
                    this.setState({
                        articles: data.articles,
                        totalArticles:data.totalResults
                    });
                }
                catch(e) 
                {
                    console.log("something is not working");
                }
            }

 
    handlePrevClick=async()=>
    {
        console.log("prev")
        let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c5d17adecfe44195b8f276d7bf73a574&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;       
        const res = await fetch(url);
        const data = await res.json();
         console.log("prev");
       
         this.setState(
                {
                page:this.state.page-1,
                articles: data.articles
        })
    }
    handleNextClick=async()=>
        {
                if(this.state.page+1 > Math.ceil(this.state.totalResults/20))
                {

                }
                else
                {
                console.log("Next");
                let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c5d17adecfe44195b8f276d7bf73a574&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;       
                const res = await fetch(url);
                const data = await res.json();
                 console.log("prev");
                 this.setState(
                        {
                        page:this.state.page+1,
                        articles: data.articles
                })
                console.log(this.props.category)
        }
        }

  render() {
        
    return ( 
        
       <div className="container my-3">
        <h3 className="ct">{this.props.category} News<span className="badge text-bg-secondary"></span></h3>
       
       {/* <span class="badge text-bg-secondary"> </span> */}
         <div className="p">
              <h2>Daily News</h2>
              </div>
            
               {/* <xyz/> */}
                <div className="row">
                        
                               { this.state.articles.map((element)=>
                                {
                                 return <div className="col-md-4" key={element.url} >
                                    
                                          <Newsitem title ={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} date={element.publishedAt} author={element.author} newsUrl={element.url} sorce={element.source.name}/>
                                        </div>
                                        
                                }
                                )
                                }      
                                                       
                 </div>  
                
                 <div className="container d-flex justify-content-between">       
                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
                 <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next&rarr;</button>    
                </div>

        </div>
        
             
    )
  }
}

export default News
