import { useContext } from 'react';

import { RouterLinks, NavbarWrapper } from './navbar.styles';

import { GlobalContext } from '../../contexts/global.context';

import Hamburger from 'hamburger-react';
import { NavbarLinksAll } from './navbarLinksAll/navbarLinksAll.componetn';

export const Navbar = () => {
  const { matches, isHamburgerOpen, setHamburgerOpen } =
    useContext(GlobalContext);

  const hamburgerToggleHandler = (toggled: boolean) => {
    return setHamburgerOpen(toggled);
  };

  return (
    <>
      <NavbarWrapper>
        <RouterLinks>
          {!matches ? (
            <NavbarLinksAll />
          ) : (
            <Hamburger
              label='Show menu'
              onToggle={(toggled) => {
                hamburgerToggleHandler(toggled);
              }}
            />
          )}
        </RouterLinks>
      </NavbarWrapper>
    </>
  );
};
