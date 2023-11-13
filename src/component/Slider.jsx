import React from "react"
import './slide.css'
function Slider(){

    return(
<>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://static7.depositphotos.com/1032463/756/i/600/depositphotos_7566192-stock-photo-online-payment.jpg" className="d-block w-100 height-300"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bak-h">THE MOST CHEAP</h5>
  
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://st3.depositphotos.com/1000854/35852/i/450/depositphotos_358527918-stock-photo-hand-holding-mini-shopping-trolley.jpg" className="d-block w-100 height-300"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bak-h">SPEED SERVICERS</h5>
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://st.depositphotos.com/1420973/2381/i/450/depositphotos_23815981-stock-photo-shop-buy-now-business-concept.jpg" className="d-block w-100 height-300" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bak-h">EVRY THING HERE</h5>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>

    )
}




export default Slider;
