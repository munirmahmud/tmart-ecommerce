import { Link } from "react-router-dom";

const PrimaryMenu = ({ menus }) => {
  return (
    <nav className="mainmenu__nav hidden-xs hidden-sm">
      <ul className="main__menu">
        {menus.length > 0 &&
          menus.map((menu) => (
            <li key={menu.id} className="drop">
              <Link to={menu.link}>{menu.text}</Link>

              {menu?.dropdown?.length > 0 && (
                <ul className="dropdown">
                  {menu.dropdown.map((dropdownMenu) => (
                    <li key={dropdownMenu.id}>
                      <Link to={menu.link}>{dropdownMenu.text}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {menu?.megaMenus?.length > 0 && (
                <ul className="dropdown mega_dropdown">
                  {menu.megaMenus.map((megaMenu) => (
                    <li key={megaMenu.id}>
                      <Link to={megaMenu.link}>{megaMenu.megaMenuTitle}</Link>
                      {megaMenu.megamenuItems?.length > 0 && (
                        <ul className="mega__item">
                          {megaMenu.megamenuItems.map((megamenuItem) => (
                            <li key={megamenuItem.id}>
                              <Link to={megamenuItem.link}>{megamenuItem.text}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default PrimaryMenu;
