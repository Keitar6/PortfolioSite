import { FC } from 'react';
import { ContactTypeContainer } from './contactType.styles';
import { Icon } from '@iconify/react';
import { H5, PBase, PSmall } from '../../../../../global.styles';
import { LinkIcon } from '../../../../icon/icon.component';

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
  return (
    <ContactTypeContainer>
      <LinkIcon whereTo={whereTo} iconType={icon}></LinkIcon>

      <H5>{title}</H5>
      {textType ? <PSmall>{textType}</PSmall> : null}
    </ContactTypeContainer>
  );
};
