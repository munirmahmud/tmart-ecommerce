import { Link } from "react-router-dom";

const ExtraMenus = ({ setToggleSearch, setToggleCartMenu, setIsToggleOffsetMenu }) => {
  return (
    <div className="col-md-2 col-sm-4 col-xs-3">
      <ul className="menu-extra">
        <li className="search search__open hidden-xs">
          <span className="ti-search" onClick={() => setToggleSearch(true)} />
        </li>
        <li>
          <Link to="login-register">
            <span className="ti-user"></span>
          </Link>
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
