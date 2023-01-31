import { FC, useContext } from 'react';
import { ContactTypeContainer } from './contactType.styles';
import { H6, PBase } from '../../../../../global.styles';
import { LinkIcon } from '../../../../icon/icon.component';
import { GlobalContext } from '../../../../../contexts/global.context';
import { RESPO_SCALES } from '../../../../../utils/mobileStyles/respoScales.utils';

type ContactTypeProps = {
  title: string;
  icon: string;
  textType?: string | null;
  whereTo?: string;
};

export const ContactType: FC<ContactTypeProps> = ({
  title,
  icon,
  textType = null,
  whereTo,
}) => {
  const { matches } = useContext(GlobalContext);
  const iconWidth = matches
    ? RESPO_SCALES.CONTACT_SECTION.ICONS.mobile
    : RESPO_SCALES.CONTACT_SECTION.ICONS.regular;

  return (
    <ContactTypeContainer>
      <LinkIcon whereTo={whereTo} iconType={icon} width={iconWidth}></LinkIcon>

      <H6>{title}</H6>
      {textType ? <PBase>{textType}</PBase> : null}
    </ContactTypeContainer>
  );
};
