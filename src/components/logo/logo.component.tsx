import { LogName, LogoWrapper } from './logo.styles';
import { LogoImage } from './logoImage/logoImage.component';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage />
      <LogName>Mateusz Statkiewicz</LogName>
    </LogoWrapper>
  );
};
