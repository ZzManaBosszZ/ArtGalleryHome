import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../../../services/api";
import url from "../../../services/url";
import "../../../css/art.css";

function Artwork() {


  const [artworks, setArtworks] = useState([]);
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

  const resetFilters = () => {
    setSelectedFilter("");
    setFilteredArtworks(artworks);
    setIsFilterSelected(false);
    document.querySelectorAll('input[name="rarity-filter"]').forEach(input => input.checked = false);
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
  const shuffledArtWorks = shuffleArray(artworks);

  const filterArtworksBySchoolOfArt = (soa) => {
    return artworks.filter(artwork => {
      const schoolOfArt = artwork.schoolOfArts.map(schoolOfArt => schoolOfArt.name);
      return schoolOfArt.includes(soa);
    });
  };
  const artworksAbstarct = filterArtworksBySchoolOfArt('Abstract Art');
  const artworksContemporary = filterArtworksBySchoolOfArt('Contemporary Art');
  const artworksEmerging = filterArtworksBySchoolOfArt('Emerging Art');
  const artworksStreet = filterArtworksBySchoolOfArt('Street Art');
  const artworksPop = filterArtworksBySchoolOfArt('Pop Art');
  const artworksMinimalist = filterArtworksBySchoolOfArt('Minimalist Art');
  const artworksImpressionistModern = filterArtworksBySchoolOfArt('Impressionist and Modern Art');

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
                        value="Unique"
                        onChange={handleFilterChange}
                      />
                      <label for="rarity-common-filter">Unique</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-rare-filter"
                        name="rarity-filter"
                        value="Limited Edition"
                        onChange={handleFilterChange}
                      />
                      <label for="rarity-rare-filter">Limited Edition</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-rare-filter"
                        name="rarity-filter"
                        value="Open Edition"
                        onChange={handleFilterChange}
                      />
                      <label for="rarity-rare-filter">Open Edition</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="rarity-rare-filter"
                        name="rarity-filter"
                        value="Unknown Edition"
                        onChange={handleFilterChange}
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
                      <label for="rarity-rare-filter">Works on Paper</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="NFP"
                      />
                      <label for="rarity-rare-filter">Sculpture</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Drawing"
                      />
                      <label for="rarity-rare-filter">Mixed Media</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Sculpture"
                      />
                      <label for="rarity-rare-filter">Ceramics</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Sculpture"
                      />
                      <label for="rarity-rare-filter">Graphic Art</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tag" id="tag-rarity">
                Materials
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
                      <label for="rarity-common-filter">Metal</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Photography"
                      />
                      <label for="rarity-rare-filter">Clay</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Prints"
                      />
                      <label for="rarity-rare-filter">Paints and Paper</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="NFP"
                      />
                      <label for="rarity-rare-filter">Stone</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Drawing"
                      />
                      <label for="rarity-rare-filter">Fabric</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Sculpture"
                      />
                      <label for="rarity-rare-filter">Wood</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        id="medium-rare-filter"
                        name="medium-filter"
                        value="Sculpture"
                      />
                      <label for="rarity-rare-filter">Glass </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tag" id="tag-rarity" onClick={resetFilters}>
              Reset Filters
              <i class="fa-regular fa-circle-xmark"></i>
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
                      <h2 className="name-artist_carousel">{artwork.artists[0].name}</h2>
                      <h2 className="exhibition">{artwork.name}</h2>
                      <span className="price-art_carousel">${artwork.price}</span>
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
                  <h3 className="title-section">Featured Artworks</h3>
                  <a href="/listArt" className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                  {shuffledArtWorks.map(artwork => (
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
                  <h3 className="title-section">Abstract Expressionism</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                {artworksAbstarct.map(artwork => (
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
                  <h3 className="title-section">Contemporary Art</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                {artworksContemporary.map(artwork => (
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
                  <h3 className="title-section">Emerging Art</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                {artworksEmerging.map(artwork => (
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
                  <h3 className="title-section">Street Art</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                {artworksStreet.map(artwork => (
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
                  <h3 className="title-section">POP Art</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                {artworksPop.map(artwork => (
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
                  <h3 className="title-section">Minimalist Art</h3>
                  <a className="view-more_art">View more</a>
                </div>
                <div className="content-section">
                {artworksMinimalist.map(artwork => (
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
                  <h3 className="title-section">Impressionist and Modern Art </h3>
                </div>
                <div className="content-section">
                {artworksImpressionistModern.map(artwork => (
                    <div className="card-art_home">
                      <Link to={`/artwork/${artwork.id}`}>
                        <a className="mnbvc">
                          <img src={artwork.artWorkImage} alt="Image 1" />
                          <h2 className="name-artist_carousel">{artwork.name}</h2>
                        </a>
                      </Link>
                    </div>
                  ))}
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
