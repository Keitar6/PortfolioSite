import { LogName, LogoWrapper } from './logo.styles';
import { LogoImage } from './logoImage/logoImage.component';

import { motion } from 'framer-motion';
import {
  ScaledTitleVariant,
  ScaledLogoVariant,
} from '../../utils/framer-motion/variants.utils';

export const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <motion.div
          variants={ScaledLogoVariant}
          initial='enter'
          animate='visible'
          exit='exit'
        >
          <LogoImage />
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
