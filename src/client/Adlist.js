import React, { Component } from 'react';
import axios from 'axios';



const imageIcon1 = 'https://source.unsplash.com/tze1kKj7Lgg/';
const imageIcon2 = 'https://source.unsplash.com/yjAFnkLtKY0/';
const imageIcon3= 'https://source.unsplash.com/2P9MMBx-6JY/';
const imageIcon4 = 'https://source.unsplash.com/164_6wVEHfI/';
const imageIcon5 = 'https://source.unsplash.com/V6gh-wx_nmo/';
const imageIcon6 = 'https://source.unsplash.com/95YRwf6CNw8/';
const imageIcon7 = 'https://source.unsplash.com/wwnSkb9Z0sM/';
const imageIcon8 = 'https://source.unsplash.com/esvWH-owWug/';


export default class Adlist extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    };
  }

  componentDidMount() {
    axios.get('/api/secret')
      .then(response => this.setState({message: response.data}));
  }

  render() {
    return (
        <section className="randompage">
      <div className="container is-fluid">
        <h1 class="headspace"data-aos="fade-up">Adlist</h1><br />
             <strong><p>All Items listed are from verified users</p></strong>
     
        <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon1} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Iphone 8+</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1100</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon2} />
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
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon3} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Cars</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Benz 2024</p>
                  <p> USA, Newyork</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(3 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 100000</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon4} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Fashion</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Red Nike </p>
                  <p>Cape St, Dublin 1, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 300</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
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
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Mac Book Pro</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1500</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon7} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Digital Camera Pro</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1100</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon5} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Fishing</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Ship Uni Max</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 50000</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon8} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Cars</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Buy me One</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 110000</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon1} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Iphone 8+</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1100</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon1} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Iphone 8+</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1100</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon2} />
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
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon3} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Cars</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Benz 2024</p>
                  <p> USA, Newyork</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(3 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 100000</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon4} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Fashion</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Red Nike </p>
                  <p>Cape St, Dublin 1, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 300</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
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
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Mac Book Pro</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1500</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon7} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Digital Camera Pro</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1100</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon5} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Fishing</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Ship Uni Max</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 50000</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon8} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Cars</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Buy me One</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 110000</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

 <div className="card1" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={imageIcon1} />
            </figure>
          </div>
          <hr/>
          <div className="card-content">
        <strong>  <span class="category">Electronics</span></strong>
          <a href="#" class="bookmark"><span class="icon-heart"></span></a>
                  <p href="#">Iphone 8+</p>
                  <p>Don St, Dublin 2, Ireland</p>
            <div className="media">
                     <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                    <span class="icon-star text-warning"></span>
                     <span class="review">(4 Reviews)  </span>
                  <div className="media-content">
                <p><strong>&nbsp;&nbsp;£ 1100</strong></p>
              <strong>  <u href='0891234567'>Tel :0891234567</u></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
     <br/><br/><br/><br/><br/><br/><br/><br/>
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
