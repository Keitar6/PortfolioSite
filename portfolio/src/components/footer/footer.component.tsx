import { FooterContainer, IconsContainer } from './footer.styles';
import { Icon } from '@iconify/react';
export const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <Icon icon='logos:linkedin-icon' color='transparent' width='32' />
        <Icon icon='logos:google-gmail' color='white' width='32' />
        <Icon icon='uiw:github' width='32' />
      </IconsContainer>
    </FooterContainer>
  );
};
