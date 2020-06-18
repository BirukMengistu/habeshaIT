import React from 'react';
import HomePage from './pages/homepage/HomePage-comp'
import Footer from './component/footer/Footer.comp'
import './App.css';
import Header from './component/header/Header.comp'
import About from './pages/About/About.comp';
import ServiceList from './component/service/service-comp'
import CarouselHome from './component/carousel/Carousel.comp'
import {Switch  , Route} from 'react-router-dom'
class  App extends React.Component {


  constructor(props)
  {
      super(props)
      this.state = {
          blogApi:[]
                  }
  }
  

  
  async componentDidMount(){
    const url ="http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=852f9be59f0b4c9cb87dad906ed35b47";
    await fetch(url)
    .then(response => response.json())
    .then(d => { this.setState({ blogApi: d});
      console.log("HERE", this.state.blogApi);
    })
    .catch(error => console.log(error))
    }
  render(){
    const { blogApi } = this.state;
    return (
      <div className="App">
      <Header/> 
      <CarouselHome/>
      
        
    
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
       
        <Footer/>
      </div> 
    );
  }

}

export default App;

/* { blogApi.map( (blognews) => <div>{blognews.articles}</div>)};
<About blog ={blogColl.articles} key={$(index)} /> */