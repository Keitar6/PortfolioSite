import { useContext } from 'react';

import { LogName, LogoWrapper } from './logo.styles';
import { LogoImage } from './logoImage/logoImage.component';

import { motion } from 'framer-motion';
import {
  ScaledTitleVariant,
  ScaledLogoVariant,
} from '../../utils/framer-motion/variants.utils';
import { GlobalContext } from '../../contexts/global.context';

export const Logo = () => {
  const { matches } = useContext(GlobalContext);
  const logoWidth = matches ? 2 : 2.5;

  return (
    <>
      <LogoWrapper>
        <motion.div
          variants={ScaledLogoVariant}
          initial='enter'
          animate='visible'
          exit='exit'
        >
          <LogoImage logoWidth={logoWidth} />
        </motion.div>
      </LogoWrapper>
      <motion.div
        variants={ScaledTitleVariant}
        initial='enter'
        animate='visible'
        exit='exit'
      >
        <LogName>Portfolio</LogName>
      </motion.div>
    </>
  );
};
