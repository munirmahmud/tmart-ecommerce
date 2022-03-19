const ExtraMenus = ({ setToggleSearch, setToggleCartMenu, setIsToggleOffsetMenu }) => {
  return (
    <div className="col-md-2 col-sm-4 col-xs-3">
      <ul className="menu-extra">
        <li className="search search__open hidden-xs">
          <span className="ti-search" onClick={() => setToggleSearch(true)} />
        </li>
        <li>
          <a href="login-register.html">
            <span className="ti-user"></span>
          </a>
        </li>

        <li className="cart__menu">
          <span className="ti-shopping-cart" onClick={() => setToggleCartMenu(true)} />
        </li>

        <li className="toggle__menu hidden-xs hidden-sm">
          <span className="ti-menu" onClick={() => setIsToggleOffsetMenu(true)} />
        </li>
      </ul>
    </div>
  );
};

export default ExtraMenus;
