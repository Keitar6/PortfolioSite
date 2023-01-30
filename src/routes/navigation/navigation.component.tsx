import { useContext } from 'react';

import { Outlet } from 'react-router';
import { Logo } from '../../components/logo/logo.component';
import { Navbar } from '../../components/navbar/navbar.component';
import { NaviLinksMobile, NaviWrapper } from './navigation.styles';
import { GlobalContext } from '../../contexts/global.context';
import { NavbarLinksAll } from '../../components/navbar/navbarLinksAll/navbarLinksAll.componetn';

export const Navigation = () => {
  const { matches, isHamburgerOpen } = useContext(GlobalContext);

  return (
    <>
      <NaviWrapper>
        <Logo />
        <Navbar />
      </NaviWrapper>
      {matches && isHamburgerOpen ? (
        <NaviLinksMobile>
          <NavbarLinksAll />
        </NaviLinksMobile>
      ) : null}
      <Outlet />
    </>
  );
};
