import React, { Component } from 'react'
import Header from './Header';
import bc from '../../img/bc.jpg'
import Portfolio from './Portfolio';
import{Redirect} from 'react-router-dom';
import Social from './Social';
import myimg from '../../img/me.jpg'


export default class Index extends Component {









  render() {
    return (
      <div className='indexpage' >
      <div className='content'>
      <h1>welcome ,,, iam  <span> Mahmoud hassan.</span></h1>
      <p> iam a full-stack web developer</p>
       
       < Social />
       <a className='linkp' href='/portfolio'>view my portfolio</a>
    

       

      </div>
     
    
      
      </div>
    )
  }
}
