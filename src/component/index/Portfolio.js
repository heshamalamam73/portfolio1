import React, { Component } from 'react'











 class Portfolio extends Component {
   phoneMode=()=>{
    const phone = document.getElementById('web')
    const phonetwo = document.getElementById('webtwo')
    const phonetre = document.getElementById('webtre')
    const phonefour = document.getElementById('webfour')
     
    phone.style.width= '400px';
    phonetwo.style.width= '400px';
    phonetre.style.width= '400px';
    phonefour.style.width= '400px';


    

   }
   tabMode=()=>{
    const phone = document.getElementById('web')
    const phonetwo = document.getElementById('webtwo')
    const phonetre = document.getElementById('webtre')
    const phonefour = document.getElementById('webfour')

    phone.style.width= '700px';
    phonetwo.style.width= '700px';
    phonetre.style.width= '700px';
    phonefour.style.width= '700px';



   

  }
 labMode=()=>{
    const phone = document.getElementById('web')
    const phonetwo = document.getElementById('webtwo')
    const phonetre = document.getElementById('webtre')
    const phonefour = document.getElementById('webfour')


    phone.style.width= '1024px';
    phonetwo.style.width= '1024px';
    phonefour.style.width= '1024px';
    phonetre.style.width= '1024px';

   

  }
  
   
  render() {
    return (
          <div className='portfolio'>
          <h1>here are some of my works </h1>
                  <div className='container'>
                      <div className='project'>
                          <h3>MOUNTION TRAVEL </h3> 
                          <a href='https://morning-wildwood-26582.herokuapp.com/'> view this app</a>
                          <div className='icons'>
                          <button onClick={this.phoneMode}>
                               <i className="fas fa-mobile-alt"></i>
                          </button>
                          <button onClick={this.tabMode} >
                              <i className="fas fa-tablet-alt"></i>
                          </button>
                          <button onClick={this.labMode}>
                              <i className="fas fa-laptop"></i>
                          </button>


                          </div>
                      </div>
                      
                         <iframe id='web' src='https://morning-wildwood-26582.herokuapp.com/' ></iframe>

                    
                  </div>
                  <hr></hr>
                  <div className='container'>
                      <div className='project'>
                          <h3>MOMUZIO-FOOD </h3> 
                          <a href='https://thawing-shore-88119.herokuapp.com/'> view this app</a>
                          <div className='icons'>
                          <button onClick={this.phoneMode}>
                               <i className="fas fa-mobile-alt"></i>
                          </button>
                          <button onClick={this.tabMode} >
                              <i className="fas fa-tablet-alt"></i>
                          </button>
                          <button onClick={this.labMode}>
                              <i className="fas fa-laptop"></i>
                          </button>
                          </div>
                      </div>
              
                         <iframe id='webtwo' src='https://thawing-shore-88119.herokuapp.com/' ></iframe>

                  </div>
                  <hr></hr>

                  <div className='container'>
                      <div className='project'>
                          <h3>MOMUZIO </h3> 
                          <a href='https://momuzio.herokuapp.com/'> view this app</a>
                          <div className='icons'>
                          <button onClick={this.phoneMode}>
                               <i className="fas fa-mobile-alt"></i>
                          </button>
                          <button onClick={this.tabMode} >
                              <i className="fas fa-tablet-alt"></i>
                          </button>
                          <button onClick={this.labMode}>
                              <i className="fas fa-laptop"></i>
                          </button>
                          </div>
                      </div>
                  
                         <iframe id='webtre' src='https://momuzio.herokuapp.com/' ></iframe>

              

                  </div>
                  <hr></hr>

                    <div className='container'>
                        <div className='project'>
                            <h3>MOMUZIO </h3> 
                            <a href='https://serene-escarpment-42183.herokuapp.com/'> view this app</a>
                            <div className='icons'>
                            <button onClick={this.phoneMode}>
                                <i className="fas fa-mobile-alt"></i>
                            </button>
                            <button onClick={this.tabMode} >
                                <i className="fas fa-tablet-alt"></i>
                            </button>
                            <button onClick={this.labMode}>
                                <i className="fas fa-laptop"></i>
                            </button>
                            </div>
                        </div>
                    
                            <iframe id='webfour' src='https://serene-escarpment-42183.herokuapp.com/' ></iframe>
                    </div>
      
              </div>
        
    )
  }
 }



export default Portfolio ;