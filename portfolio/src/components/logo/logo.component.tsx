import { Colors } from '../../global.styles';
import { LogName, LogoWrapper } from './logo.styles';
import { Icon } from '@iconify/react';

export const Logo = () => {
  return (
    <LogoWrapper>
      <Icon icon='icon-park-twotone:cool' color={`${Colors.primary}`} />
      <LogName>Mateusz Statkiewicz</LogName>
    </LogoWrapper>
  );
};
