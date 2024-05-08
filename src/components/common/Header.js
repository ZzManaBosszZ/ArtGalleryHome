import React from 'react';
function Header() {
  return (
    <div>
      <link rel="stylesheet" href="assets/css/header.css" />
      <header className="ct-header">
        <div className="ct-header__wrapper">
          <div className="ct-header__toolbar">
            <div className="socialWidget">
              <p>
                <a href="#">
                  <i className="far fa-fw fa-facebook fab fa-lg"></i>
                </a>
                <a href="#" target="_self" className="nice-scroll" rel="noopener">
                  <i className="far fa-fw fa-twitter fab fa-lg"></i>
                </a>
                <a href="#" target="_self" className="nice-scroll" rel="noopener">
                  <i className="far fa-fw fa-instagram fab fa-lg"></i>
                </a>
                <a href="#" target="_self" className="nice-scroll" rel="noopener">
                  <i className="far fa-fw fa-pinterest fab fa-lg"></i>
                </a>
              </p>
            </div>

            <form action="" id="search-box">
              <input type="text" id="search-text" />
              <button id="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div className="login-area">
              
                <a className="loginButton" href="#">Login</a>
              
              
                <a className="registerButton" href="#">Register</a>
              
            </div>
          </div>
          <div className="container-fluid" style={{ paddingLeft: '55px' }}>
            <div className="ct-header__logo-nav" style={{ paddingTop: '30px' }}>
              <a href="/" rel="home" className="ct-logo">
                <img
                  className="ct-logo__image"
                  src="assets/images/home/logo.png"
                  alt="Art Gallery "
                />
              </a>
              
              <div id="ct-main-nav">
                <input
                  type="checkbox"
                  hidden
                  id="ct-main-nav__toggle-navigation-main"
                />
                <nav
                  id="ct-main-nav__wrapper"
                  
                >
                  <ul
                    id="menu-menu"
                    className="ct-main-navigation"
                    
                  >
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-114"
                      id="menu-item-114"
                    >
                      <a href="artwork">Artworks<i class="fa-solid fa-angle-down"></i></a>
                      <ul className="sub-menu" id="sub-menu_artworks">
                        <div className="sub-menu_item">
                          Price
                          <a href="#">Find Under $1,000</a>
                          <a href="#">Find Under $5,000</a>
                          <a href="#">Find Under $10,000</a>
                        </div>
                        <div className="sub-menu_item">
                          Curators’ Picks
                          <a href="#">Contemporary Abstraction</a>
                          <a href="#">Top Auction Lots</a>
                          <a href="#">Best of Prints & Editions</a>
                        </div>
                        <div className="sub-menu_item">
                          Categories
                          <a href="#">Contemporary Art</a>
                          <a href="#">Emerging Art</a>
                          <a href="#">Street Art</a>
                          <a href="#">Abstract Art</a>
                          <a href="#">Pop Art</a>
                          <a href="#">Minimalism</a>
                          <a href="#">Impressionist and Modern Art</a>
                        </div>
                        <div className="sub-menu_item">
                          Mediums
                          <a href="#">Painting</a>
                          <a href="#">Prints</a>
                          <a href="#">Works on Paper</a>
                          <a href="#">Photography</a>
                          <a href="#">Sculpture</a>
                          <a href="#">Ceramics</a>
                          <a href="#">Design</a>
                          <a href="#">NFTs</a>
                        </div>
                      </ul>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"
                      id="menu-item-176"
                    >
                      <a href="/Artists">Artists</a>
                    </li>

                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"
                      id="menu-item-299"
                    >
                      <a href="/viewingroom">ViewingRooms</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
                      id="menu-item-113"
                    >
                      <a href="/event">Events</a>
                    </li>

                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109"
                      id="menu-item-109"
                    >
                      <a href="/about">About Us</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"
                      id="menu-item-112"
                    >
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
