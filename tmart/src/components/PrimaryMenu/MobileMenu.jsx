const MobileMenu = () => {
  return (
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
  );
};

export default MobileMenu;
