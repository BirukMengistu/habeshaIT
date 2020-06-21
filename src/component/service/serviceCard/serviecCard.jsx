import React from 'react'
import './servicecard.styles.css'


const ServiecCard = ({blog}) => {
 
    return (
    
    <div className = 'feature'>
    
      { blog
        .filter((item, idx) => (idx < 3) )
        .map( (article => <div className='card'>
                              <img src={article.urlToImage}/>
                              <h6>{article.title} <a href="#"/></h6>                     
        </div>))}     
      
      
      </div>
        
    )
}

export default ServiecCard;

/* const filerjson = (blog)=>{
  const latestNews = { blog.filer(blogfeature => (Key(blogfeature).length <= 3))};
   return(
    
   )
 }

 const featureArticle = filerjson({blog}) ; */