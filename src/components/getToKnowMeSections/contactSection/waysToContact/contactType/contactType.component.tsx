import { FC } from 'react';
import { ContactTypeContainer } from './contactType.styles';
import { H6, PBase } from '../../../../../global.styles';
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
      <LinkIcon whereTo={whereTo} iconType={icon} width={40}></LinkIcon>

      <H6>{title}</H6>
      {textType ? <PBase>{textType}</PBase> : null}
    </ContactTypeContainer>
  );
};
