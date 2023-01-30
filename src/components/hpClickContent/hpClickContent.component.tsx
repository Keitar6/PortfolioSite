import { useContext } from 'react';

import { HpClickContainer, HpClickWrapper } from './hpClickContent.styles';
import { LogoImage } from '../../components/logo/logoImage/logoImage.component';

import { HPLogoVariant } from '../../utils/framer-motion/variants.utils';
import { GlobalContext } from '../../contexts/global.context';
import { RESPO_SCALES } from '../../utils/mobileStyles/respoScales.utils';

export const HpClick = () => {
  const { matches } = useContext(GlobalContext);
  return (
    <HpClickWrapper
      variants={HPLogoVariant}
      initial='enter'
      animate='visible'
      exit='exit'
    >
      <HpClickContainer>
        {!matches ? (
          <LogoImage logoWidth={RESPO_SCALES.LOGO_GAMEBLOCK_Regular.logo} />
        ) : (
          <LogoImage logoWidth={RESPO_SCALES.LOGO_GAMEBLOCK_Mobile.logo} />
        )}
      </HpClickContainer>
    </HpClickWrapper>
  );
};
