
import { LogName, LogoWrapper,LogoImage } from './logo.styles';

export const Logo = () => {
  return (
    <LogoWrapper>

      <LogoImage src='/resources/logo/png/logo-no-background.png'/>
      <LogName>Mateusz Statkiewicz</LogName>
    </LogoWrapper>
  );
};
