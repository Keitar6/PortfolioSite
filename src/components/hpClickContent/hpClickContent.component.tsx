import { HpClickContainer, HpClickWrapper } from './hpClickContent.styles';
import { LogoImage } from '../../components/logo/logoImage/logoImage.component';

import { HPLogoVariant } from '../../utils/framer-motion/variants.utils';

export const HpClick = () => {
  return (
    <HpClickWrapper
      variants={HPLogoVariant}
      initial='enter'
      animate='visible'
      exit='exit'
    >
      <HpClickContainer>
        <LogoImage logoWidth={14} />
      </HpClickContainer>
    </HpClickWrapper>
  );
};
