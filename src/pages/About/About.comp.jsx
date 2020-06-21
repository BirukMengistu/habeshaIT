import React from 'react'
import'./about-styles.css'
const About = (articles) => {

    return (
        <div className='aboutus'>
           
          {
              articles.map((news) =>  <div> 
                <h1>{news.ttile}</h1>,
                <span>
                {news.url} 
                </span></div> )
          }

        </div>
    )
}


export default About;


 /*   */
