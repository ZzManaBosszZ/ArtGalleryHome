import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isLoggedIn } from '../../../utils/auth';
import { getDecodedToken, removeAccessToken } from "../../../utils/auth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../css/artDetail.css"
import api from "../../../services/api";
import url from "../../../services/url";
function ArtworkDetail() {
  const sliderRef1 = useRef(null);
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);
  const [artist, setArtists] = useState([]);
  const { id } = useParams();
  const [ArtWorkDetail, setArtWorkDetail] = useState({ schoolOfArts: [] });
  const navigate = useNavigate();

  const handleOffer = () => {
    if (!isLoggedIn()) {
      localStorage.setItem("redirectPath", window.location.pathname);
      navigate("/login");
    } else {
      navigate(`/offer/${id}`);
    }
  };

  //hien thi thong tin chi tiet artwork
  useEffect(() => {
    const userToken = localStorage.getItem("access_token");
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    api.get(`${url.ARTWORK.DETAIL.replace("{}", id)}`)
      .then((response) => {
        setArtWorkDetail(response.data);
      })
      .catch((error) => {
        // console.error("Error fetching promotion details:", error);
      });
  }, [id]);

  //hien thi thong tin artist
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

  // Hàm shuffle mảng
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  useEffect(() => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
      sliderRef1.current.slickPrev();

    }
  }, []);

  const goToNext1 = () => {
    sliderRef1.current.slickNext();
  };

  const goToPrev1 = () => {
    sliderRef1.current.slickPrev();
  };



  return (
    <div>
      <div className="ArtDetail-page">
        <div className="about-artwork">
          <div className="info-art_section">
            <div className="img-art_sec">
              <div className="img-art">
                <img src={ArtWorkDetail.artWorkImage}></img>
              </div>
              <div className="otherServices">
                <button>
                  <i class="fa-regular fa-heart"></i>Save
                </button>
                <button>
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>Share
                </button>
              </div>
            </div>
            <div className="about_art-detail">
              <div className="title-tab_art">
                <div class="tablinks">About the work</div>
                {/* <button class="tablinks" onclick="openCity(event, 'Provenance')">
                Provenance
                </button> */}
              </div>
              <div className="content-tab_art">
                <div id="AboutWork" class="tabcontent">
                  <dl>
                    <dt>Materials</dt>
                    <dd>{ArtWorkDetail.materials}</dd>
                  </dl>
                  <dl>
                    <dt>Size</dt>
                    <dd>{ArtWorkDetail.size}</dd>
                  </dl>
                  <dl>
                    <dt>Rarity</dt>
                    <dd>{ArtWorkDetail.rarity}</dd>
                  </dl>
                  <dl>
                    <dt>Medium</dt>
                    <dd>{ArtWorkDetail.medium}</dd>
                  </dl>
                  <dl>
                    <dt>Signature</dt>
                    <dd>{ArtWorkDetail.signature}</dd>
                  </dl>
                  <dl>
                    <dt>Frame</dt>
                    <dd>{ArtWorkDetail.frame}</dd>
                  </dl>
                </div>
              </div>
              <div className="about-provenance">
                <div className="artist-section">
                  <div className="about-artist">
                    <div className="img-arttist">
                      <img src="assets/images/artists/color.webp"></img>
                    </div>
                    <div className="info-artist">
                      <a className="name-artist">Rachel MacFarlane</a>
                      <p>Canadian, b. 1986</p>
                    </div>
                  </div>
                  <div className="button-follow">
                    <a> Follow</a>
                  </div>
                </div>
                <div className="exhibition-section">
                  <h3 className="title_exhibition-section">
                    Selected exhibitions
                  </h3>
                  <div className="content_exhibition">
                    <dl>
                      <dt>2024</dt>
                      <dd>
                        Rachel MacFarlane: Coming Events Cast Their Light Before
                        Them, Hollis Taggart
                      </dd>
                    </dl>
                    <dl>
                      <dt>2023</dt>
                      <dd>
                        Of the Past and Present: Estates and Contemporary
                        Artists at Hollis Taggart, Hollis Taggart
                      </dd>
                    </dl>
                    <dl>
                      <dt>2022</dt>
                      <dd>Dimensions, Hollis Taggart</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-art_section">
            <div className="info-purchase_art">
              <h1 className="name-artist">Rachel MacFarlane</h1>
              <h2 className="name-exhibition">{ArtWorkDetail.name} 2024</h2>
              <p className="masterial">Oil on canvas</p>
              <p className="size">24 × 18 in | 61 × 45.7 cm</p>
              <p className="rarity">Unique work</p>
              <h1 className="price">${ArtWorkDetail.price}</h1>
            </div>
            <div className="button_purchase-sec">
              <a onClick={handleOffer} id="offer-button"> Make An Offer</a>
            </div>
            <div className="shipping-info">
              <h4>Shipping and Taxes</h4>
              <p>Taxes may apply at checkout. </p>
              <br />
              <p>Ships from New York, NY, US</p>
              <br />
              <p>Shipping: Calculated in checkout</p>
            </div>
            <div className="other-artist">
              <div className="title_other-artist">
                <h3>Related artists</h3>
                <a className="viewmore">ViewMore</a>
              </div>
              <div className="info-other_artist">
                <div className="about-list_artist">
                  {shuffle(artist).slice(0, 5).map((item, index) => {
                    return (
                      <div className="artist-section">
                        <div className="about-artist">
                          <div className="img-arttist">
                            <img src={item.image}></img>
                          </div>
                          <div className="info-artist">
                            <a className="name-artist">{item.name}</a>
                            <p>Canadian, b. 1986</p>
                          </div>
                        </div>
                        <div className="button-follow">
                          <a> Follow</a>
                        </div>
                      </div>
                    );
                  })}


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="other-artwork">
          {/* other works by artist */}
          <div className="title_other-artwork">
            <h2 >Other works by Rachel MacFarlane</h2>
            <a>View All</a>
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
              <div className="card-art_home">
                <a>
                  <img src="assets/images/arts/art1.jpeg" alt="Image 1" />
                  <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                  <h2 className="exhibition">Perfomer, 2024</h2>
                  <span className="price-art_carousel">$10,000-$35,000</span>
                </a>
                <a className="button_add-product">Purchase</a>
              </div>
              <div className="card-art_home">
                <a>
                  <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                  <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                  <h2 className="exhibition">Perfomer, 2024</h2>
                  <span className="price-art_carousel">$10,000-$35,000</span>
                </a>
                <a className="button_add-product">Purchase</a>
              </div>
              <div className="card-art_home">
                <a>
                  <img src="assets/images/arts/art3.jpeg" alt="Image 1" />
                  <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                  <h2 className="exhibition">Perfomer, 2024</h2>
                  <span className="price-art_carousel">$10,000-$35,000</span>              </a>
                <a className="button_add-product">Purchase</a>
              </div>
              <div className="card-art_home">
                <a>
                  <img src="assets/images/arts/art4.jpeg" alt="Image 1" />
                  <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                  <h2 className="exhibition">Perfomer, 2024</h2>
                  <span className="price-art_carousel">$10,000-$35,000</span>              </a>
                <a className="button_add-product">Purchase</a>
              </div>
              <div className="card-art_home">
                <a>
                  <img src="assets/images/arts/art5.jpeg" alt="Image 1" />
                  <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                  <h2 className="exhibition">Perfomer, 2024</h2>
                  <span className="price-art_carousel">$10,000-$35,000</span>              </a>
                <a className="button_add-product">Purchase</a>
              </div>
              <div className="card-art_home">
                <a>
                  <img src="assets/images/arts/art6.jpeg" alt="Image 1" />
                  <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                  <h2 className="exhibition">Perfomer, 2024</h2>
                  <span className="price-art_carousel">$10,000-$35,000</span>              </a>
                <a className="button_add-product">Purchase</a>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtworkDetail;
