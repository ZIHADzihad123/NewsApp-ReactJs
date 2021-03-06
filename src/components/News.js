
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../index.css'
import Spinner from './Spinner';
export class News extends Component {
  article=
  [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Japanese Red Army founder Shigenobu freed after 20 years",
      "description": "Fusako Shigenobu, 76, was jailed for her part in a hostage siege at the French embassy in the Hague.",
      "url": "http://www.bbc.co.uk/news/world-asia-61615018",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8D13/production/_124951163_a9d4188a-dc8a-4e06-be68-43501e8da9f8.jpg",
      "publishedAt": "2022-05-28T03:37:18.812785Z",
      "content": "Image caption, Fusako Shigenobu walked free more than 20 years after her arrest in Osaka\r\nThe co-founder of the Japanese Red Army militant group has been freed from prison after serving 20 years for … [+1621 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Armed female bystander kills man firing at party in West Virginia",
      "description": "A woman at a birthday bash drew her pistol and left the gunman with multiple wounds, police say.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-61615236",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14D43/production/_124951358_gettyimages-858367878.jpg",
      "publishedAt": "2022-05-28T02:52:14.3271414Z",
      "content": "Image source, Getty Images\r\nImage caption, AR-15 style rifles for sale in Virginia\r\nA female party-goer stopped a potential mass shooting in the US when she pulled out her gun and fatally shot a man … [+1762 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC Sport",
      "title": "Giants manager boycotts US anthem after shooting",
      "description": "After a Texas school shooting, Gabe Kapler says: \"I am not OK with the state of this country.\"",
      "url": "http://www.bbc.co.uk/sport/baseball/61612283",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5ED2/production/_124947242_gettyimages-1396733447.jpg",
      "publishedAt": "2022-05-28T00:52:16.0373791Z",
      "content": "Tributes to the victims of the mass shooting in Uvalde took place before baseball games this week\r\nSan Francisco Giants manager Gabe Kapler says he will not come out for the national anthem before ga… [+2007 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Living underground in Kharkhiv for three months",
      "description": "Families who have been sheltering in a metro station since the start of the war now fear eviction.",
      "url": "http://www.bbc.co.uk/news/world-europe-61611193",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/476C/production/_124948281_p0c9j8m9.jpg",
      "publishedAt": "2022-05-28T00:37:20.0058976Z",
      "content": "Some Ukrainian families have been living in a metro station in the countrys second largest city of Kharkiv for more than three months. \r\nWith no fresh air or access to washing facilities, disease has… [+177 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC Sport",
      "title": "'Battle of heavyweights' - what's at stake in Paris?",
      "description": "Liverpool will look to win European club football's most prestigious prize for the seventh time when they face Real Madrid in a mouth-watering Champions League final in Paris on Saturday.",
      "url": "http://www.bbc.co.uk/sport/football/61592156",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/115CA/production/_124941117_promo.jpg",
      "publishedAt": "2022-05-27T22:37:30.395654Z",
      "content": "'This group of players is very special'\r\n<table><tr><th>2022 Champions League final: Liverpool v Real Madrid</th></tr>\r\n<tr><td>Date: 28 May Venue: Stade de France, Paris Kick-off: 20:00 BST</td></tr… [+7962 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Trump: US should fund safe schools before Ukraine",
      "description": "The former president calls for campuses to have fortified single points of entry with armed police.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-61614782",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9C4F/production/_124951004_microsoftteams-image-4.png",
      "publishedAt": "2022-05-27T22:37:25.1142643Z",
      "content": "Image source, Getty Images\r\nThe US should prioritise funding for school security over aid to Ukraine, former President Donald Trump has said days after 19 Texas pupils were killed. \r\nIf the US can se… [+2289 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Ukraine war: Troops could quit Severodonetsk amid Russian advance - official",
      "description": "Russian forces are in part of Severodonetsk and could surround local troops, a local commander says.",
      "url": "http://www.bbc.co.uk/news/world-europe-61613479",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1123D/production/_124950207_gettyimages-1240883627.jpg",
      "publishedAt": "2022-05-27T21:52:21.3962342Z",
      "content": "Image source, Getty Images\r\nImage caption, Severodonetsk has been under heavy Russian bombardment\r\nUkrainian troops could withdraw from the big eastern city of Severodonetsk, which Russian forces are… [+3622 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Japan opens up to foreign tourists after two years",
      "description": "Visitors from 98 countries will be allowed to enter, but some restrictions still remain.",
      "url": "http://www.bbc.co.uk/news/world-asia-61612599",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/29D1/production/_124950701_gettyimages-1198679845.jpg",
      "publishedAt": "2022-05-27T20:52:25.9584084Z",
      "content": "By Nadeem ShadBBC News\r\nImage source, Getty Images\r\nAfter being closed to tourists for two years, Japan is opening its borders to visitors from 98 countries and regions.\r\nIt marks the most significan… [+1957 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Uvalde shooting: Police admit Texas shooting response was wrong",
      "description": "'If I thought it would help, I would apologise,' official says amid heated press conference.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-61613177",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/111E2/production/_124941107_gettyimages-1240923427.jpg",
      "publishedAt": "2022-05-27T17:22:21.7713593Z",
      "content": "Media caption, 'I just want my baby home' - relatives of children speak of their heartbreak\r\nPolice made the \"wrong decision\" by failing to storm a classroom in Robb Elementary School as a gunman kil… [+1791 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Johnny Depp: Closing arguments in Amber Heard defamation trial begin",
      "description": "Addressing the court first, a lawyer for Mr Depp asked jurors to 'give Mr Depp his life back'.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-61610470",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2750/production/_124946001_heardindex.jpg",
      "publishedAt": "2022-05-27T14:37:23.7235213Z",
      "content": "By Holly HonderichBBC News\r\nImage source, Getty Images\r\nClosing arguments in the high-profile defamation battle between Johnny Depp and Amber Heard have begun after six weeks of trial in Virginia.\r\nM… [+1672 chars]"
    }
  ]
  constructor()
  {
    super();
    console.log("Hello");
    this.state={
      page:1,
      articles :[],
      pageSize:9
    }
    
  }

  

 async componentDidMount()
  {
     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f381bb7afea24f9abbdc8b4830baabe0&page=1&pageSize=9";
     let data = await fetch(url);
     let parseData = await data.json();
     this.setState({articles:parseData.articles})
  }
  
  onPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f381bb7afea24f9abbdc8b4830baabe0&page=${this.state.page-1}&pageSize=9`;
     let data = await fetch(url);
     let parseData = await data.json();
     this.setState(
       { page:this.state.page-1,
         articles:parseData.articles})
         
  }

  onNextClick = async () => {
    if(this.state.page+1>Math.ceil(this.state.articles.totalResults/9)){
    
    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f381bb7afea24f9abbdc8b4830baabe0&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState(
        { page: this.state.page + 1,
          articles:parseData.articles})
    }
    
  }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h1  className="headline my-3">Top Headline News</h1>
        <Spinner/>
        <div  className="container"> 
        <div  className="ticker"> 
        <div  className="title">
          <h5>Breaking News</h5>
        </div>
        <div  className="news"> 
        <marquee  className="news-content "> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p> 
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto </p> 
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam </p> 
        </marquee> 
        </div> 
        </div> 
    
    </div>
        <div className="row ">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}  clickUrl={element.url}/>
        </div>
          
        })}      
        </div>     
      </div>

      <div className="container d-flex justify-content-between my-3">
      <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" onClick={this.onPrevClick}>&larr;Previous</button>
      <button disabled={(this.state.page+1>Math.ceil(70/9))} type="button"  className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button>
      </div>
      </>
      
    )
  }
}

export default News