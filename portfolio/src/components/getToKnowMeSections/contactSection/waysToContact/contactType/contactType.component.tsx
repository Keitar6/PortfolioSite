import { FC } from 'react';
import { ContactTypeContainer } from './contactType.styles';
import { Icon } from '@iconify/react';
import { H5, PBase, PSmall } from '../../../../../global.styles';

type ContactTypeProps = {
  title: string;
  icon: string;
  textType?: string | null;
};

export const ContactType: FC<ContactTypeProps> = ({
  title,
  icon,
  textType = null,
}) => {
  return (
    <ContactTypeContainer>
      <Icon icon={`${icon}`} width='32' />
      <H5>{title}</H5>
      {textType ? <PSmall>{textType}</PSmall> : null}
    </ContactTypeContainer>
  );
};
