 import React, { Component } from 'react';
import { StyleSheet  , View , Image } from 'react';
import axios from 'axios';



const imageIcon6 = 'https://source.unsplash.com/95YRwf6CNw8/';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Loading...'
        };
    }

    componentDidMount() {
        axios.get('/api/home')
            .then(response => this.setState({ message: response.data }));
    }

    render() {
        return (
            <section className="hero is-bold is-light is-fullheight-with-navbar">
                
                    <div className="fifths">
                    <br></br><br></br>
                    <h1 class="headspace"data-aos="fade-up">Welcome To Ads Guru</h1><br />
                  <strong><p>An Unlitmed Ads listing Website</p></strong>
                <p data-aos="fade-up" data-aos-delay="100"><br /><br />
                <div class="row text-center trending-search" data-aos="fade-up"  data-aos-delay="300">
                <div class="col-12"><br /><br />
                <h2 class="d-inline-block"><strong>Trending Search:</strong></h2>
                <div  className="navblock">
                 <a href="#">Phone</a>&nbsp;&nbsp;
                <a href="#">Fashion Wear</a>&nbsp;&nbsp;
                <a href="#">Sunglasses</a>&nbsp;&nbsp;
                <a href="#">Wrist Watches</a>&nbsp;&nbsp;
                </div>
                </div>
                </div>
                </p>
                </div>
             
             <div class="site-section">
                 <div class="secondcontent">
               <div class="row justify-content-center mb-5">
            <br /><br />
            <q> We serve millions of buyers around the world .</q>
            <br /><br />
            <p> We Accomplish this by providing the best service to our customer, products are verified before been listed to our customers .</p>
            <br /><br /><br /><br />

        <h1 class="secondheadspace">Popular Categories</h1><br /><br />
            <p class="color-black-opacity-5"> Select from our range of product listed </p>
         <br /><br /><br />
        <div class="overlap-category mb-5">
          <div class="row align-items-stretch no-gutters">
            <div class="itemlist">
              <a href="#" class="popular-category h-100">
                <span class="icon"><span class="flaticon-car"></span></span>
                <span class="caption mb-2 d-block">Cars &amp; Vehicles</span>
                <span class="number">1,921</span>
              </a>
            </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="itemlist">
              <a href="#" class="popular-category h-100">
                <span class="icon"><span class="flaticon-tv"></span></span>
                <span class="caption mb-2 d-block">Electronics</span>
                <span class="number">2,932</span>
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="itemlist">
              <a href="#" class="popular-category h-100">
                <span class="icon"><span class="flaticon-pizza"></span></span>
                <span class="caption mb-2 d-block">Other</span>
                <span class="number">183</span>
              </a>
            </div>
            </div>
            </div>
            </div>
            <br /><br /><br />
            
          <u>   <h1 class="secondheadspace">Feature Ads </h1><br /><br /></u>
            <p class="color-black-opacity-5"> Sign-in to view more Ads and contact details </p>
             

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon6} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Sport</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Sport Bike Pro</p>
                  <p>Cape St, Dublin 1, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(5 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 700</strong></p>
             
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon6} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Sport</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Sport Bike Pro</p>
                  <p>Cape St, Dublin 1, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(5 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 700</strong></p>
             
              </div>
            </div>
          </div>
        </div>
      </div>            
            

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon6} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Sport</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Sport Bike Pro</p>
                  <p>Cape St, Dublin 1, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(5 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 700</strong></p>
             
              </div>
            </div>
          </div>
        </div>
      </div>

 
 <br /> <br /> <br /> <br /> <br />
            </div>
            </div>
           
        <footer class="site-footer">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-6">
                <p>Ads Directory raised €1.3million for charity by donating a portion of ad revenue to causes selected by its staff</p>
               <p> This project was created to express my knowledge on react </p>
                <p>&copy; 2020 Created by EDWIN ODEH</p>
              </div>
              </div>
              </div>
              </div>
                </footer>
            </section>
            
        );
    }
}
