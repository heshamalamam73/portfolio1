import React, { Component } from 'react'
import {BrowserRouter , Route,  NavLink as Link}  from 'react-router-dom';
import Index from './index'
import About from './About'
import Portfolio from './Portfolio'

 class Header extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='header'>
                    
                        <div className='nav-brand'>
                        <h3>MOMUZIO</h3>
                        </div>
                       
                        <ul className='nav-links'>
                            <li> <Link exact to='/'     > Home  </Link> </li>
                            <li> <Link to='/about'> about </Link> </li>
                            <li> <Link to='/portfolio'> Portfolio </Link> </li>
                        </ul>
                        <Route exact path='/' component={Index} />
                        <Route path='/about' component={About} />
                        <Route path='/portfolio' component={Portfolio} />
                </div>
        </BrowserRouter>

    )
  }
}
export default Header;