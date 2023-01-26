import { FC } from 'react';
import { LogoImageContainer } from './logoImage.styles';
type LogoImageProps = {
  logoWidth?: number;
};
export const LogoImage: FC<LogoImageProps> = ({ logoWidth = 2.5 }) => {
  return (
    <LogoImageContainer
      logoWidth={logoWidth}
      src='/resources/logo/png/logo-no-background.png'
    />
  );
};
