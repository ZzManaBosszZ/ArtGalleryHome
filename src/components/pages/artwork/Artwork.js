import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../../../services/api";
import url from "../../../services/url";
import "../../../css/art.css";

function Artwork() {


  const [artworks, setArtworks] = useState({artists: []});
  const [filteredArtworks, setFilteredArtworks] = useState([]); // Danh sách tác phẩm đã được lọc
  const [selectedFilter, setSelectedFilter] = useState(""); // Giá trị của filter đang được chọn
  const [isFilterSelected, setIsFilterSelected] = useState(false); // Biến boolean để kiểm tra xem filter đã được chọn chưa

  useEffect(() => {
    const userToken = localStorage.getItem("access_token");
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    api.get(`${url.ARTWORK.LIST}`)
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((error) => {
        // console.error("Error fetching promotion details:", error);
      });
  }, []);

  // Hàm để lọc danh sách tác phẩm dựa trên giá trị của filter
  const filterArtworks = (filterValue) => {
    if (filterValue === "") {
      // Nếu filter không được chọn, hiển thị tất cả tác phẩm
      setFilteredArtworks(artworks);
      setIsFilterSelected(false);
    } else {
      // Nếu filter được chọn, lọc danh sách tác phẩm dựa trên filter
      const filtered = artworks.filter((artwork) => {
        return artwork.rarity === filterValue;
      });
      setFilteredArtworks(filtered);
      setIsFilterSelected(true);
    }
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setSelectedFilter(value);
    filterArtworks(value);
  };
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
  const shuffledArtists = shuffleArray(artworks);

  const filterArtworksBySchoolOfArt = (soa) => {
    return artworks.filter(artwork => {
      const schoolOfArt = artwork.schoolOfArts.map(schoolOfArt => schoolOfArt.name);
      return schoolOfArt.includes(soa);
    });
  };
  const artworksWithGivenSchoolOfArt = filterArtworksBySchoolOfArt('v');

  return (
    <div>
      <div className="artwork-page">
        <div className="top-page">
          <h1 className="title-art_page">Our Artworks</h1>

          {/* <div className="vertical-line"></div> */}
          <div className="demo-page">
            <p>
              Discover captivating artworks from around the world. Dive into a
              world of creativity and inspiration on our Artworks page.
            </p>
          </div>
        </div>
        <div className="filter-section_home">
          <div className="list-tag-filter">

            <div class="tag-filter">

              <div class="tag" id="tag-rarity">
                Rarity
                <i class="fa-solid fa-angle-down"></i>
                <div class="sidebar">
                  <div class="checkbox-container">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-common-filter"
                        name="rarity-filter"
                        value="A"
                        onChange={handleFilterChange}
                      />
                      <label for="rarity-common-filter">C</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-rare-filter"
                        name="rarity-filter"
                        value="Limited Edition"
                      />
                      <label for="rarity-rare-filter">Limited Edition</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-rare-filter"
                        name="rarity-filter"
                        value="Open Edition"
                      />
                      <label for="rarity-rare-filter">Open Edition</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-rare-filter"
                        name="rarity-filter"
                        value="Unknown Edition"
                      />
                      <label for="rarity-rare-filter">Unknown Edition</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tag" id="tag-medium">
                Medium
                <i class="fa-solid fa-angle-down"></i>
                <div class="sidebar">
                  <div class="checkbox-container">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-common-filter"
                        name="medium-filter"
                        value="Painting"
                      />
                      <label for="rarity-common-filter">Painting</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Photography"
                      />
                      <label for="rarity-rare-filter">Photography</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Prints"
                      />
                      <label for="rarity-rare-filter">Prints</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="NFP"
                      />
                      <label for="rarity-rare-filter">NFP</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Drawing"
                      />
                      <label for="rarity-rare-filter">Drawing</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Sculpture"
                      />
                      <label for="rarity-rare-filter">Sculpture</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tag" id="tag-rarity">
                Materials
                <i class="fa-solid fa-angle-down"></i>

              </div>
            </div>
          </div>
          <div className="side-bar_filter"></div>
        </div>
        <div className="main-content_page">


          {isFilterSelected ? (
            // Nếu filter được chọn, hiển thị danh sách tác phẩm đã lọc
            <div>
              <div className="content-section">
              {filteredArtworks.length > 0 ? (
                
                filteredArtworks.map((artwork) => (
                  
                  <div className="card-art_home">
                    <a>
                      <img src={artwork.artWorkImage} alt="Image 1" />
                      <h2 className="name-artist_carousel"></h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>           
                ))
              ) : (
                <div>No artworks found.</div>
              )}
              </div>
            </div>


          ) : (
            <div>
              <div id="Comtemporary-sec" className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Comtemporary</h3>
                  <a href="/listArt" className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  {artworksWithGivenSchoolOfArt.map(artwork => (
                    <div className="card-art_home">
                      <Link to={`/artwork/${artwork.id}`}>
                        <a className="mnbvc">
                          <img src={artwork.artWorkImage} alt="Image 1" />
                          <h2 className="name-artist_carousel">{artwork.name}</h2>
                          <h2 className="exhibition">{artwork.series}</h2>
                          <span className="price-art_carousel">${artwork.price}</span>
                        </a>
                        <a className="button_add-product">Purchase</a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Emerging</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                </div>
              </div>
              <div className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Street</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                </div>
              </div>{" "}
              <div className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Abstract</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                </div>
              </div>{" "}
              <div className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Pop</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                </div>
              </div>
              <div className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Minimalism</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
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
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                </div>
              </div>
              <div className="art-section">
                <div className="top-section">
                  <h3 className="title-section">Impressionist and Modern </h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                  <div className="card-art_home">
                    <a className="mnbvc">
                      <img src="assets/images/arts/art2.jpeg" alt="Image 1" />
                      <h2 className="name-artist_carousel">Gordian Knot Wood</h2>
                      <h2 className="exhibition">Perfomer, 2024</h2>
                      <span className="price-art_carousel">$10,000-$35,000</span>
                    </a>
                    <a className="button_add-product">Purchase</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}

export default Artwork;
