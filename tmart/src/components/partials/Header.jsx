import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import primaryMenus from "../../temp/menus.json";
import ExtraMenus from "../ExtraMenus";
import CartOffestMenu from "../OffsetItems/CartOffestMenu";
import OffsetMenus from "../OffsetItems/OffsetMenus";
import Search from "../OffsetItems/Search";
import PrimaryMenu from "../PrimaryMenu";
import MobileMenu from "../PrimaryMenu/MobileMenu";

const Header = () => {
  const { menus } = primaryMenus;

  const [isToggleSearch, setToggleSearch] = useState(false);
  const [isToggleCartMenu, setToggleCartMenu] = useState(false);
  const [isToggleOffsetMenu, setIsToggleOffsetMenu] = useState(false);

  return (
    <>
      <header id="header" className="htc-header header--3 bg__white">
        {/* <!-- Start Mainmenu Area --> */}
        <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Tmart" />
                  </Link>
                </div>
              </div>

              {/* <!-- Start MAinmenu Ares --> */}
              <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                <PrimaryMenu menus={menus} />

                <MobileMenu />
              </div>
              {/* <!-- End MAinmenu Ares --> */}

              <ExtraMenus setToggleSearch={setToggleSearch} setToggleCartMenu={setToggleCartMenu} setIsToggleOffsetMenu={setIsToggleOffsetMenu} />
            </div>

            <div className="mobile-menu-area" />
          </div>
        </div>
        {/* <!-- End Mainmenu Area --> */}
      </header>

      <div className={`body__overlay ${isToggleCartMenu | isToggleOffsetMenu ? "is-visible" : ""}`} />

      {isToggleSearch && (
        <div className="search__box__show__hide">
          <Search setToggleSearch={setToggleSearch} />
        </div>
      )}

      {isToggleCartMenu && <CartOffestMenu isToggleCartMenu={isToggleCartMenu} setToggleCartMenu={setToggleCartMenu} />}

      {isToggleOffsetMenu && <OffsetMenus isToggleOffsetMenu={isToggleOffsetMenu} setIsToggleOffsetMenu={setIsToggleOffsetMenu} />}
    </>
  );
};

export default Header;
