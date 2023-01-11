import { Outlet } from 'react-router';
import { Logo } from '../../components/logo/logo.component';
import { Navbar } from '../../components/navbar/navbar.component';
import { NaviWrapper } from './navigation.styles';

export const Navigation = () => {
  return (
    <>
      <NaviWrapper>
        <Logo />
        <Navbar />
      </NaviWrapper>
      <Outlet />
    </>
  );
};
