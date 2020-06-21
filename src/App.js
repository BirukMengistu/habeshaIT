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

  render(){
         
    return (
      <div className="App">
      <Header/> 
        <ServiceList/>
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
       
        <Footer/>
      </div> 
    );
  }

}

export default App;
/*  */

 /* .then(response => response.json()) //convert to json
        //.then(users =>this.setState({ news: users}));
        .then(res => {
            const articles = res.articles;
           
            this.setState({ articles: articles });
          }) */
/* { blogApi.map( (blognews) => <div>{blognews.articles}</div>)};
<About blog ={blogColl.articles} key={$(index)} /> */