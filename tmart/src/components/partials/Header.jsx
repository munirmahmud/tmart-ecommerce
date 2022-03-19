import logo from "../../images/logo/logo.png";

const Header = () => {
  return (
    <header id="header" className="htc-header header--3 bg__white">
      {/* <!-- Start Mainmenu Area --> */}
      <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} alt="Tmart" />
                </a>
              </div>
            </div>
            {/* <!-- Start MAinmenu Ares --> */}
            <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
              <nav className="mainmenu__nav hidden-xs hidden-sm">
                <ul className="main__menu">
                  <li className="drop">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="drop">
                    <a href="portfolio-card-box-2.html">portfolio</a>
                    <ul className="dropdown">
                      <li>
                        <a href="portfolio-card-box-2.html">portfolio</a>
                      </li>
                      <li>
                        <a href="single-portfolio.html">Single portfolio</a>
                      </li>
                    </ul>
                  </li>
                  <li className="drop">
                    <a href="blog.html">Blog</a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog.html">blog 3 column</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog details</a>
                      </li>
                    </ul>
                  </li>

                  <li className="drop">
                    <a href="shop.html">Shop</a>
                    <ul className="dropdown mega_dropdown">
                      {/* <!-- Start Single Mega MEnu --> */}
                      <li>
                        <a className="mega__title" href="shop.html">
                          shop layout
                        </a>
                        <ul className="mega__item">
                          <li>
                            <a href="shop.html">default shop</a>
                          </li>
                          <li>
                            <a href="shop.html">default shop</a>
                          </li>
                          <li>
                            <a href="shop.html">default shop</a>
                          </li>
                          <li>
                            <a href="shop.html">default shop</a>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- End Single Mega MEnu -->
                                            <!-- Start Single Mega MEnu --> */}
                      <li>
                        <a className="mega__title" href="shop.html">
                          product details layout
                        </a>
                        <ul className="mega__item">
                          <li>
                            <a href="product-details.html">tab style 1</a>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- End Single Mega MEnu -->
                                            <!-- Start Single Mega MEnu --> */}
                      <li>
                        <ul className="mega__item">
                          <li>
                            <div className="mega-item-img">
                              <a href="shop.html">
                                <img src="images/feature-img/3.png" alt="" />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- End Single Mega MEnu --> */}
                    </ul>
                  </li>
                  <li className="drop">
                    <a href="#">pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="about.html">about</a>
                      </li>
                      <li>
                        <a href="#">
                          testimonials{" "}
                          <span>
                            <i className="zmdi zmdi-chevron-right"></i>
                          </span>
                        </a>
                        <ul className="lavel-dropdown">
                          <li>
                            <a href="customer-review.html">customer review</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop.html">shop</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">shop sidebar</a>
                      </li>
                      <li>
                        <a href="product-details.html">product details</a>
                      </li>
                      <li>
                        <a href="cart.html">cart</a>
                      </li>
                      <li>
                        <a href="wishlist.html">wishlist</a>
                      </li>
                      <li>
                        <a href="checkout.html">checkout</a>
                      </li>
                      <li>
                        <a href="team.html">team</a>
                      </li>
                      <li>
                        <a href="login-register.html">login & register</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
              </nav>
              <div className="mobile-menu clearfix visible-xs visible-sm">
                <nav id="mobile_dropdown">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                      <ul>
                        <li>
                          <a href="portfolio-card-box-2.html">portfolio</a>
                        </li>
                        <li>
                          <a href="single-portfolio.html">Single portfolio</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">blog 3 column</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">pages</a>
                      <ul>
                        <li>
                          <a href="about.html">about</a>
                        </li>
                        <li>
                          <a href="customer-review.html">customer review</a>
                        </li>
                        <li>
                          <a href="shop.html">shop</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">shop sidebar</a>
                        </li>
                        <li>
                          <a href="product-details.html">product details</a>
                        </li>
                        <li>
                          <a href="cart.html">cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">wishlist</a>
                        </li>
                        <li>
                          <a href="checkout.html">checkout</a>
                        </li>
                        <li>
                          <a href="team.html">team</a>
                        </li>
                        <li>
                          <a href="login-register.html">login & register</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!-- End MAinmenu Ares --> */}
            <div className="col-md-2 col-sm-4 col-xs-3">
              <ul className="menu-extra">
                <li className="search search__open hidden-xs">
                  <span className="ti-search"></span>
                </li>
                <li>
                  <a href="login-register.html">
                    <span className="ti-user"></span>
                  </a>
                </li>
                <li className="cart__menu">
                  <span className="ti-shopping-cart"></span>
                </li>
                <li className="toggle__menu hidden-xs hidden-sm">
                  <span className="ti-menu"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-menu-area"></div>
        </div>
      </div>
      {/* <!-- End Mainmenu Area --> */}
    </header>
  );
};

export default Header;
