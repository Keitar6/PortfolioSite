
import { H3, TextLink } from '../../global.styles';
import { RouterLinks, NavbarWrapper } from './navbar.styles';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <RouterLinks>
        <H3>
          <TextLink to='/'>About</TextLink>
        </H3>
        <H3>
          <TextLink to='/'>Projects</TextLink>
        </H3>
        <H3>
          <TextLink to='/'>Contact</TextLink>
        </H3>
      </RouterLinks>
    </NavbarWrapper>
  );
};
