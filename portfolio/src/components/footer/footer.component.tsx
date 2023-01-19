import { FooterContainer, IconsContainer } from './footer.styles';

import { ICONS } from '../../utils/icons/icons.utils';
import { MY_INFOS } from '../../utils/myInfos/myInfos.utils';
import { LinkIcon } from '../icon/icon.component';
export const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <LinkIcon
          iconType={ICONS.linkedin}
          whereTo={MY_INFOS.linkedin}
        ></LinkIcon>
        <LinkIcon
          iconType={ICONS.emailColor}
          whereTo={MY_INFOS.emailPrivate}
        ></LinkIcon>
        <LinkIcon iconType={ICONS.github} whereTo={MY_INFOS.github}></LinkIcon>
      </IconsContainer>
    </FooterContainer>
  );
};
