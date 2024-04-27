import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      sliderRef1.current.slickNext();
      sliderRef1.current.slickPrev();
      sliderRef2.current.slickNext();
      sliderRef2.current.slickPrev();
    }
  }, []);

  const goToNext1 = () => {
    sliderRef1.current.slickNext();
  };

  const goToPrev1 = () => {
    sliderRef1.current.slickPrev();
  };

  const goToNext2 = () => {
    sliderRef2.current.slickNext();
  };

  const goToPrev2 = () => {
    sliderRef2.current.slickPrev();
  };
  return (
    <div className="homepage">
      <link rel="stylesheet" href="assets/css/home.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&family=Lora:wght@600&family=Montserrat:ital,wght@0,100;1,100&family=Playfair+Display:ital@0;1&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&family=Lora:wght@600&family=Montserrat:ital,wght@0,500;1,500&family=Playfair+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <div className="Header-hero">
        <div className="main_headerhero">
          <div className="title_header-hero">
            <p>Art Gallery, Where Creativity Blooms</p>
          </div>
          <div className="content_header-hero">
            <p>
              Embark on a journey through the captivating world of artistry.
              <br />
              Explore stunning and innovative artworks from talented artists.{" "}
              <br />
              <br />
              Join us in making life more beautiful with art!
            </p>
          </div>
        </div>

        <div className="img_header-hero">
          <div className="no_im-hero"></div>
          <div className="img-hero">
            <img
              className="img-home_hero"
              src="assets/images/home/Header-hero1.jpeg"
            ></img>
          </div>
        </div>
      </div>
      <div className="Featured-section_home">
        <div className="title-section_home">
          <h1>Featured</h1>
          <div className="vertical-line"></div>

        </div>
        <div className="carousel-controls">
          <i className="fa-solid fa-angle-left" onClick={goToPrev1}></i>
          <i className="fa-solid fa-angle-right" onClick={goToNext1}></i>
        </div>
        <div className="content-section_home">
          <Slider
            ref={sliderRef1}
            className="multiple-items1"
            infinite={true}
            slidesToShow={4}
            slidesToScroll={3}
          >
            <div  className="card-art_home">
              <a>
                <img src="assets/images/arts/art1.jpeg" alt="Image 1" />
                <h2 className="name-art_carousel">Gordian Knot Wood</h2>
                <span className="price-art_carousel">$35,200</span>
              </a>
              <a className="button_add-product">Add to cart</a>
            </div>
            <div  className="card-art_home">
              <a>
                <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                <h2 className="name-art_carousel">Gordian Knot Wood</h2>
                <span className="price-art_carousel">$35,200</span>
              </a>
              <a className="button_add-product">Add to cart</a>
            </div>
            <div  className="card-art_home">
              <a>
                <img src="assets/images/arts/art3.jpeg" alt="Image 1" />
                <h2 className="name-art_carousel">Gordian Knot Wood</h2>
                <span className="price-art_carousel">$35,200</span>
              </a>
              <a className="button_add-product">Add to cart</a>
            </div>
            <div  className="card-art_home">
              <a>
                <img src="assets/images/arts/art4.jpeg" alt="Image 1" />
                <h2 className="name-art_carousel">Gordian Knot Wood</h2>
                <span className="price-art_carousel">$35,200</span>
              </a>
              <a className="button_add-product">Add to cart</a>
            </div>
            <div  className="card-art_home">
              <a>
                <img src="assets/images/arts/art5.jpeg" alt="Image 1" />
                <h2 className="name-art_carousel">Gordian Knot Wood</h2>
                <span className="price-art_carousel">$35,200</span>
              </a>
              <a className="button_add-product">Add to cart</a>
            </div>
            <div  className="card-art_home">
              <a>
                <img src="assets/images/arts/art6.jpeg" alt="Image 1" />
                <h2 className="name-art_carousel">Gordian Knot Wood</h2>
                <span className="price-art_carousel">$35,200</span>
              </a>
              <a className="button_add-product">Add to cart</a>
            </div>
            
          </Slider>
        </div>
        
      </div>



      <div className="Artist-section_home">
        <div className="title-section_home">
          <h1>Ours Artists</h1>
          <div className="vertical-line"></div>

        </div>
        <div className="carousel-controls">
          <i className="fa-solid fa-angle-left" onClick={goToPrev2}></i>
          <i className="fa-solid fa-angle-right" onClick={goToNext2}></i>
        </div>
        <div className="content-section_home">
          <Slider
            ref={sliderRef2}
            className="multiple-items2"
            infinite={true}
            slidesToShow={4}
            slidesToScroll={3}
          >
            <div  className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist1.webp" alt="Image 1" />
                
              </a>
              <a className="main-artist">
                 <div className="artist-info">Atsuko Tanaka
                  <br/><p>Japenese, 1932-1005</p>
                 </div>
                 <div className="button-follow">Follow</div>
              </a>
            </div>
            <div  className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
                
              </a>
              <a className="main-artist">
                 <div className="artist-info">Atsuko Tanaka
                 <br/><p>Japenese, 1932-1005</p>
                 </div>
                 <div className="button-follow">Follow</div>
              </a>
            </div> 
            <div  className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist2.webp" alt="Image 1" />
                
              </a>
              <a className="main-artist">
                 <div className="artist-info">Atsuko Tanaka
                 <br/><p>Japenese, 1932-1005</p>
                 </div>
                 <div className="button-follow">Follow</div>
              </a>
            </div> 
            <div  className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist3.webp" alt="Image 1" />
                
              </a>
              <a className="main-artist">
                 <div className="artist-info">Atsuko Tanaka
                 <br/><p>Japenese, 1932-1005</p>
                 </div>
                 <div className="button-follow">Follow</div>
              </a>
            </div>
             <div  className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist4.webp" alt="Image 1" />
                
              </a>
              <a className="main-artist">
                 <div className="artist-info">Atsuko Tanaka
                 <br/><p>Japenese, 1932-1005</p>
                 </div>
                 <div className="button-follow">Follow</div>
              </a>
            </div> 
            <div  className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist5.webp" alt="Image 1" />
                
              </a>
              <a className="main-artist">
                 <div className="artist-info">Atsuko Tanaka
                 <br/><p>Japenese, 1932-1005</p>
                 </div>
                 <div className="button-follow">Follow</div>
              </a>
            </div>
            
          </Slider>
        </div>
      </div>

      

      <div className="Events-section_home">
        <div className="title-section_home">
          <h1> Events & Programs</h1>
          {/* <div className="vertical-line"></div> */}

        </div>
        <div className="event-section_home">
          <div className="event-section_item">
            <div className="img-event">
              <img src="assets/images/arts/art7.jpeg"></img>
            </div>
            <div className="content-event">
              <div className="time-event">AUGUST 18</div>
              <div className="horizontal-linetime"></div>
              <div className="name-event">Peasant Scenes And Landscapes</div>
              <div className="demo-event">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</div>
            </div>

          </div>
          <div className="event-section_item">
            <div className="content-event">
              <div className="time-event">AUGUST 18</div>
              <div className="horizontal-linetime"></div>
              <div className="name-event">Peasant Scenes And Landscapes</div>
              <div className="demo-event">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</div>
            </div>
            <div className="img-event">
              <img src="assets/images/arts/art9.jpeg"></img>
            </div>

          </div>
          <div className="event-section_item">
            <div className="img-event">
              <img src="assets/images/arts/art10.jpeg"></img>
            </div>
            <div className="content-event">
              <div className="time-event">AUGUST 20 </div>
              <div className="horizontal-linetime"></div>
              <div className="name-event">Rojo Y Negro - Latin American Art</div>
              <div className="demo-event">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</div>
            </div>

          </div>
          
        </div>
      </div>

      {/* <div className="Viewingroon-section_home">
        <div className="title-section_home">
          <h1> Viewing Rooms</h1>
          

        </div>

      </div> */}

      
    </div>
  );
}

export default Home;
