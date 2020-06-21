import React from 'react'
import ServiecCard  from './serviceCard/serviecCard'
import './servicelist-styles.css'

class ServiceList extends React.Component{ 
  constructor(props)
  {

      super(props)
      this.state = {
        BlogApi:[]
                  }
  }
componentDidMount(){
        const url ="https://newsapi.org/v2/top-headlines?country=it&apiKey=0b3e87958d0b4e71a9e2ed3eea69237a";
        fetch(url)
        .then(response => response.json())
        .then(resp => { 
          this.setState({ BlogApi: resp.articles});
          console.log("HERE", this.state.BlogApi);
        })
        .catch(error => console.log(error))
        }


      render(){
           const {BlogApi} = this.state;
           return (
            <div className='card__name'>Featured
                  <ServiecCard blog = {BlogApi} />
            
            </div>
        )
       }
        
    
 
}
export default ServiceList;

