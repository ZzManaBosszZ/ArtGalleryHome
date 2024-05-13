import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../../../services/api";
import url from "../../../services/url";
// import "../../../css/artist.css";
function Artists() {
  const sliderRef = useRef(null);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem("access_token");
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    api.get(`${url.ARTIST.LIST}`)
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        // console.error("Error fetching promotion details:", error);
      });
  }, []);

  // Hàm để sắp xếp mảng nghệ sĩ theo thứ tự ngẫu nhiên
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // Lấy danh sách nghệ sĩ và sắp xếp ngẫu nhiên
  const shuffledArtists = shuffleArray(artists);

  const filterArtistsBySchoolOfArt = (soa) => {
    return artists.filter(artist => { 
      const schoolOfArt = artist.schoolOfArts.map(schoolOfArt => schoolOfArt.name);
      return schoolOfArt.includes(soa);
    });
  };
  const artistsWithGivenSchoolOfArt = filterArtistsBySchoolOfArt('B');

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      sliderRef.current.slickPrev();
    }
  }, []);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="artist-page">
      <link rel="stylesheet" href="assets/css/artist.css" />

      <div className="top-page">
        <h1 className="title-artist_page">Our Artists</h1>

        {/* <div className="vertical-line"></div> */}
        <div className="demo-page">
          <p>
            Explore our Artists page to discover a curated selection of talented
            creators and their captivating artworks. Join us in celebrating
            artistic diversity and creativity from around the globe!
          </p>
        </div>
      </div>
      <div className="main-content_page">
        <section className="featured-artists_carousel">
          <div className="top-section">
            <h3 className="title-section">Featured Artists</h3>
            <a className="view-more_artist">View more</a>
          </div>
          <div className="carousel-controls">
            <i className="fa-solid fa-angle-left" onClick={goToPrev}></i>
            <i className="fa-solid fa-angle-right" onClick={goToNext}></i>
          </div>
          <div className="content-section_home">
            <Slider
              ref={sliderRef}
              className="multiple-items2"
              infinite={true}
              slidesToShow={4}
              slidesToScroll={3}
            >
              {shuffledArtists.map(artist => (
                <div className="card-artist">
                  <Link to={`/artist/${artist.id}`}>
                  <a className="img-artist">
                    <img src={artist.image} alt="Image 1" />
                  </a>
                  </Link>
                  <a className="main-artist">
                    <div className="artist-info">
                      {artist.name}
                      <br />
                      <p>Japenese, 1932-1005</p>
                    </div>
                    <div className="button-follow">Follow</div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="artists-section">
          <div className="top-section">
            <h3 className="title-section">Gutai</h3>
            <a href="/listArtist" className="view-more_artist">View more</a>
          </div>
          <div className="section-content_artist">
          {artistsWithGivenSchoolOfArt.map(artist => (
            <div className="card-artist">
              <a href="/artistDetail" className="img-artist">
                <img src={artist.image} alt="Image 1" />
              </a>
              <a href="/artistDetail" className="main-artist">
                <div className="artist-info">
                  {artist.name}
                  <br />
                  <p>{artist.description}</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            ))}
          </div>
        </section>
        <section className="artists-section">
          <div className="top-section">
            <h3 className="title-section">Abstract Expressionism</h3>
            <a className="view-more_artist">View more</a>
          </div>
          <div className="section-content_artist">
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
          </div>
        </section>

        <section className="artists-section">
          <div className="top-section">
            <h3 className="title-section">Color Field Painting</h3>
            <a className="view-more_artist">View more</a>
          </div>
          <div className="section-content_artist">
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
          </div>
        </section>
        <section className="artists-section">
          <div className="top-section">
            <h3 className="title-section">Hyperrealism</h3>
            <a className="view-more_artist">View more</a>
          </div>
          <div className="section-content_artist">
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
          </div>
        </section>
        <section className="artists-section">
          <div className="top-section">
            <h3 className="title-section">Light and Space Movement</h3>
            <a className="view-more_artist">View more</a>
          </div>
          <div className="section-content_artist">
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
          </div>
        </section>
        <section className="artists-section">
          <div className="top-section">
            <h3 className="title-section">Dansaekhwa</h3>
            <a className="view-more_artist">View more</a>
          </div>
          <div className="section-content_artist">
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
            <div className="card-artist">
              <a className="img-artist">
                <img src="assets/images/artists/artist6.webp" alt="Image 1" />
              </a>
              <a className="main-artist">
                <div className="artist-info">
                  Atsuko Tanaka
                  <br />
                  <p>Japenese, 1932-1005</p>
                </div>
                <div className="button-follow">Follow</div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Artists;
