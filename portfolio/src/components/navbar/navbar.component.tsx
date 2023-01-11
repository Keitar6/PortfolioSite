import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { H3, TextLink } from '../../global.styles';
import { RouterLinks, SocialMediaLinks, NavbarWrapper } from './navbar.styles';

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

      <SocialMediaLinks>
        <Icon icon='logos:linkedin-icon' color='transparent' width='32' />
        <Icon icon='logos:google-gmail' color='white' width='32' />
        <Icon icon='uiw:github' width='32' />
      </SocialMediaLinks>
    </NavbarWrapper>
  );
};
